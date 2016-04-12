import * as React from 'react';
import ReactDOM from 'react-dom';

import ConfigSelector from './config-selector';
import Popup from '../src/Popup';

class BasicDemo extends React.Component {
    constructor(props) {
        super(props);

        const collisionValues = Object.keys(Popup.collision);
        const horizontalValues = [ Popup.origin.left, Popup.origin.center, Popup.origin.right ];
        const verticalValues = [ Popup.origin.top, Popup.origin.center, Popup.origin.bottom ];

        this.state = {
            collision: {
                horizontal: Popup.collision.fit,
                vertical: Popup.collision.flip
            },
            collisionValues: collisionValues,
            horizontalValues: horizontalValues,
            origin: {
                horizontal: Popup.origin.left,
                vertical: Popup.origin.bottom
            },
            position: {
                horizontal: Popup.position.left,
                vertical: Popup.position.top
            },
            show: false,
            verticalValues: verticalValues
        };
    }

    collisionChange = (collisions) => {
        this.setState({
            collision: collisions
        });
    }

    originChange = (origins) => {
        this.setState({
            origin: origins
        });
    }

    positionChange = (positions) => {
        this.setState({
            position: positions
        });
    }

    toggle = () => {
        const { show } = this.state;

        this.setState({
            show: !show
        });
    }

    render() {
        const {
            collision,
            collisionValues,
            horizontalValues,
            origin,
            position,
            show,
            verticalValues
        } = this.state;

        const popupProps = {
            anchor: this.refs.anchor,
            collision: collision,
            origin: origin,
            position: position,
            show: show
        };

        return (
            <div className="example">
                <div className="content">
                    <div className="anchor" ref="anchor">Anchor</div>
                    <Popup {...popupProps}>
                        <div className="popup-content">
                            <ul>
                                <li>Item1</li>
                                <li>Item2</li>
                                <li>Item3</li>
                            </ul>
                        </div>
                    </Popup>
                </div>
                <fieldset>
                    <h3>Options</h3>
                    <hr />
                    <div>
                        <h4>Collisions</h4>
                        <ConfigSelector
                            {...collision}
                            horizontalValues={collisionValues}
                            onChange={this.collisionChange}
                            verticalValues={collisionValues}
                        />
                    </div>
                    <div>
                        <h4>Origin</h4>
                        <ConfigSelector
                            {...origin}
                            horizontalValues={horizontalValues}
                            onChange={this.originChange}
                            verticalValues={verticalValues}
                        />
                    </div>
                    <div>
                        <h4>Position</h4>
                        <ConfigSelector
                            {...position}
                            horizontalValues={horizontalValues}
                            onChange={this.positionChange}
                            verticalValues={verticalValues}
                        />
                    </div>
                    <hr />
                    <div>
                        <h4>Popup action</h4>
                        <button onClick={this.toggle}>{show ? 'Close' : 'Open'}</button>
                    </div>
                </fieldset>
            </div>
        );
    }
}

ReactDOM.render(
  <BasicDemo />,
  document.getElementById('app')
);
