import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Animation } from '@telerik/kendo-react-animation';

import styles from '@telerik/kendo-theme-default/styles/animation/main';
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
        origin: React.PropTypes.shape({
            horizontal: React.PropTypes.oneOf([
                util.alignPoint.left,
                util.alignPoint.center,
                util.alignPoint.right
            ]),
            vertical: React.PropTypes.oneOf([
                util.alignPoint.bottom,
                util.alignPoint.center,
                util.alignPoint.top
            ])
        }),
        position: React.PropTypes.shape({
            horizontal: React.PropTypes.oneOf([
                util.alignPoint.left,
                util.alignPoint.center,
                util.alignPoint.right
            ]),
            vertical: React.PropTypes.oneOf([
                util.alignPoint.bottom,
                util.alignPoint.center,
                util.alignPoint.top
            ])
        }),
        show: React.PropTypes.bool
    }

    static defaultProps = {
        collision: {
            horizontal: util.collision.fit,
            vertical: util.collision.flip
        },
        origin: {
            horizontal: util.alignPoint.left,
            vertical: util.alignPoint.bottom
        },
        position: {
            horizontal: util.alignPoint.left,
            vertical: util.alignPoint.top
        }
    }

    constructor(props) {
        super(props);

        this.state = { position: null };
    }

    componentWillReceiveProps(newProps) {
        let { anchor, collision, origin, position, show } = newProps;

        if (anchor && show) {
            const anchorElement = ReactDOM.findDOMNode(anchor);
            const elementContainer = ReactDOM.findDOMNode(this);

            let elementPosition = util.align({
                element: elementContainer,
                anchor: anchorElement,
                origins: origin,
                positions: position
            });

            let positionResult = util.position({
                element: elementContainer,
                elementPosition: elementPosition,
                anchor: anchorElement,
                collisions: collision,
                origins: origin,
                positions: position
            });

            elementPosition.top += positionResult.position.top;
            elementPosition.left += positionResult.position.left;

            this.setState({
                flipped: positionResult.flipped,
                position: elementPosition
            });
        }
    }

    render() {
        let { children, show, ...otherProps } = this.props;
        const { flipped, position } = this.state;

        let key = new Date().getTime();
        let style = show ? null : { display: 'none' };

        //let transitionName = flipped ? styles['slide-up'] : styles['slide-down'];
        let transitionName = flipped ? 'k-slide-up' : 'k-slide-down';

        //TODO: Use styles.popup when available
        let popupClassName = 'k-popup';

        return (
            <Animation className={popupClassName} {...otherProps} style={position} transitionName={transitionName}>
                <div key={key} style={style}>
                    {children}
                </div>
            </Animation>
        );
    }
}

//exports the enums
Popup.collision = util.collision;
Popup.origin = util.alignPoint;
Popup.position = util.alignPoint;

export default Popup;
