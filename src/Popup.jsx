import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Slide } from '@telerik/kendo-react-animation';

import styles from '@telerik/kendo-theme-default/styles/popup/main';
import util from './util';

class Popup extends React.Component {
    static propTypes = {
        anchor: function(props) {
            const { anchor } = props;

            if (anchor && (!React.isValidElement(anchor) && anchor.nodeType === undefined)) {
                return new Error(
                    'Invalid prop `anchor` supplied to `Kendo React Popup`. Validation failed.'
                );
            }
        },
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.node
        ]),
        className: React.PropTypes.string,
        collision: React.PropTypes.shape({
            horizontal: React.PropTypes.oneOf([
                util.collision.fit,
                util.collision.flip
            ]),
            vertical: React.PropTypes.oneOf([
                util.collision.fit,
                util.collision.flip
            ])
        }),
        position: React.PropTypes.shape({
            anchor: React.PropTypes.shape({
                horizontal: React.PropTypes.oneOf([
                    util.alignPoint.left,
                    util.alignPoint.center,
                    util.alignPoint.middle,
                    util.alignPoint.right
                ]),
                vertical: React.PropTypes.oneOf([
                    util.alignPoint.bottom,
                    util.alignPoint.center,
                    util.alignPoint.middle,
                    util.alignPoint.top
                ])
            }),
            popup: React.PropTypes.shape({
                horizontal: React.PropTypes.oneOf([
                    util.alignPoint.left,
                    util.alignPoint.center,
                    util.alignPoint.middle,
                    util.alignPoint.right
                ]),
                vertical: React.PropTypes.oneOf([
                    util.alignPoint.bottom,
                    util.alignPoint.center,
                    util.alignPoint.middle,
                    util.alignPoint.top
                ])
            })
        }),
        show: React.PropTypes.bool
    }

    static defaultProps = {
        collision: {
            horizontal: util.collision.fit,
            vertical: util.collision.flip
        },
        position: {
            anchor: {
                horizontal: util.alignPoint.left,
                vertical: util.alignPoint.bottom
            },
            popup: {
                horizontal: util.alignPoint.left,
                vertical: util.alignPoint.top
            }
        }
    }

    constructor(props) {
        super(props);

        this.state = { position: null };
    }

    position = () => {
        let { anchor, collision, position } = this.props;

        const anchorElement = ReactDOM.findDOMNode(anchor);
        const elementContainer = ReactDOM.findDOMNode(this);

        const elementPosition = util.align({
            element: elementContainer,
            anchor: anchorElement,
            origins: position.anchor,
            positions: position.popup
        });

        const positionResult = util.position({
            element: elementContainer,
            elementPosition: elementPosition,
            anchor: anchorElement,
            collisions: collision,
            origins: position.anchor,
            positions: position.popup
        });

        elementPosition.top += positionResult.position.top;
        elementPosition.left += positionResult.position.left;

        this.setState({
            flipped: positionResult.flipped,
            position: elementPosition
        });
    }

    render() {
        let { children, className, show } = this.props;
        const { flipped, position } = this.state;
        const direction = flipped ? "up" : "down";

        const content = show ? children : null;

        const slideProps = {
            className: styles.popup,
            componentChildClassName: className,
            componentWillSlideIn: this.position,
            direction: direction,
            style: position
        };

        return (
            <Slide {...slideProps}>
                {content}
            </Slide>
        );
    }
}

//exports the enums
Popup.collision = util.collision;
Popup.origin = util.alignPoint;
Popup.position = util.alignPoint;

export default Popup;
