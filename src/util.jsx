const alignPoint = {
    "bottom": "bottom",
    "center": "center",
    "left": "left",
    "right": "right",
    "top": "top"
};

const collision = {
    "fit": "fit",
    "flip": "flip"
};

const align = ({ element, anchor, origins, positions }) => {
    const horizontalOrigin = origins.horizontal;
    const verticalOrigin = origins.vertical;
    const horizontalPosition = positions.horizontal;
    const verticalPosition = positions.vertical;

    const anchorRect = positionRect(anchor);
    const elementRect = positionRect(element);

    let top = anchorRect.top;
    let left = anchorRect.left;

    if (verticalOrigin === alignPoint.bottom) {
        top += anchorRect.height;
    }

    if (verticalOrigin === alignPoint.center) {
        top += Math.round(anchorRect.height / 2);
    }

    if (verticalPosition === alignPoint.bottom) {
        top -= elementRect.height;
    }

    if (verticalPosition === alignPoint.center) {
        top -= Math.round(elementRect.height / 2);
    }

    if (horizontalOrigin === alignPoint.right) {
        left += anchorRect.width;
    }

    if (horizontalOrigin === alignPoint.center) {
        left += Math.round(anchorRect.width / 2);
    }

    if (horizontalPosition === alignPoint.right) {
        left -= elementRect.width;
    }

    if (horizontalPosition === alignPoint.center) {
        left -= Math.round(elementRect.width / 2);
    }

    return {
        top: top,
        left: left
    };
};

const position = ({ element, elementPosition, anchor, origins, positions, collisions }) => {
    const anchorOffsetRect = offsetRect(anchor);
    const elementOffsetRect = offsetRect(element, elementPosition);

    const documentElement = element.ownerDocument.documentElement;
    const win = getWindow(element);

    const viewPortHeight = win.innerHeight;
    const viewPortWidth = win.innerWidth;

    const location = { left: 0, top: 0 };

    elementOffsetRect.top -= (win.pageYOffset || documentElement.scrollTop || 0);
    elementOffsetRect.left -= (win.pageXOffset || documentElement.scrollLeft || 0);

    if (collisions.vertical === collision.fit) {
        location.top += fit(elementOffsetRect.top, elementOffsetRect.height, viewPortHeight);
    }

    if (collisions.horizontal === collision.fit) {
        location.left += fit(elementOffsetRect.left, elementOffsetRect.width, viewPortWidth);
    }

    if (collisions.vertical === collision.flip) {
        location.top += flip({
            offset: elementOffsetRect.top,
            size: elementOffsetRect.height,
            anchorSize: anchorOffsetRect.height,
            viewPortSize: viewPortHeight,
            origin: origins.vertical,
            position: positions.vertical
        });
    }

    if (collisions.horizontal === collision.flip) {
        location.left += flip({
            offset: elementOffsetRect.left,
            size: elementOffsetRect.width,
            anchorSize: anchorOffsetRect.width,
            viewPortSize: viewPortWidth,
            origin: origins.horizontal,
            position: positions.horizontal
        });
    }

    return {
        flipped: location.left !== 0 || location.top !== 0,
        position: location
    };
};

const fit = function(position, size, viewPortSize) {
    let output = 0;

    if (position + size > viewPortSize) {
        output = viewPortSize - (position + size);
    }

    if (position < 0) {
        output = -position;
    }

    return output;
};

const flip = function({ offset, size, anchorSize, viewPortSize, origin, position }) {
    let output = 0;

    if (position !== origin && position !== alignPoint.center && origin !== alignPoint.center) {
        if (offset + size > viewPortSize) {
            output += -(anchorSize + size);
        }

        if (offset + output < 0) {
            output += anchorSize + size;
        }
    }
    return output;
};

const getWindow = (element) => ( element.ownerDocument.defaultView );

const offsetParent = (element) => {
    const documentElement = element.ownerDocument.documentElement;
    let offsetParent = element.offsetParent;

    while (offsetParent && offsetParent.style.position === "static") {
        offsetParent = offsetParent.offsetParent;
    }

    return offsetParent || documentElement;
};

const rectOfHiddenElement = (element) => {
    const { display, left, position } = element.style;
    const child = element.children[0];
    const childDisplay = child.style.display;
    let rect;

    child.style.display = '';
    element.style.display = '';
    element.style.left = '-10000px';
    element.style.position = 'absolute';

    rect = element.getBoundingClientRect();

    child.style.display = childDisplay;
    element.style.display = display;
    element.style.left = left;
    element.style.position = position;

    return rect;
};

const offsetRect = (element, currentPosition) => {
    const elementLeft = element.style.left;
    const elementTop = element.style.top;
    const ownerDocument = element.ownerDocument;

    element.style.left = '';
    element.style.top = '';

    let rect = element.getBoundingClientRect();
    let left = rect.left;
    let top = rect.top;

    if (currentPosition) {
        if (offsetParent(element) !== ownerDocument.body) {
            left += currentPosition.left;
            top += currentPosition.top;
        } else {
            left = currentPosition.left;
            top = currentPosition.top;
        }
    }

    if (!rect.height && !rect.width) {
        rect = rectOfHiddenElement(element);
    }

    if (rect.width || rect.height) {
        const documentElement = ownerDocument.documentElement;
        const win = getWindow(element);

        top += win.pageYOffset - documentElement.clientTop;
        left += win.pageXOffset - documentElement.clientLeft;
    }

    element.style.left = elementLeft;
    element.style.top = elementTop;

    return {
        top: top,
        left: left,
        height: rect.height,
        width: rect.width
    };
};

const positionRect = (element) => {
    const win = getWindow(element);
    const elementStyles = win.getComputedStyle(element);
    const offset = offsetRect(element);
    const parentElement = offsetParent(element);
    const parentStyles = win.getComputedStyle(parentElement);

    let parentOffset = { top: 0, left: 0 };

    if (elementStyles.position !== "fixed" && parentElement !== element.ownerDocument.body) {
        parentOffset = offsetRect(parentElement);

        parentOffset.top += parseInt(parentStyles.borderTopWidth, 10);
        parentOffset.left += parseInt(parentStyles.borderLeftWidth, 10);
    }

    return {
        top: offset.top - parentOffset.top - parseInt(elementStyles.marginTop, 10),
        left: offset.left - parentOffset.left - parseInt(elementStyles.marginLeft, 10),
        height: offset.height,
        width: offset.width
    };
};

const key = () => ( new Date().getTime() );

export default {
    align: align,
    alignPoint: alignPoint,
    collision: collision,
    key: key,
    offsetRect: offsetRect,
    positionRect: positionRect,
    position: position
};
