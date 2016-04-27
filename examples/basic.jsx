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
            position: {
                anchor: {
                    horizontal: Popup.origin.left,
                    vertical: Popup.origin.bottom
                },
                popup: {
                    horizontal: Popup.position.left,
                    vertical: Popup.position.top
                }
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
            position: {
                anchor: origins,
                popup: this.state.position.popup
            }
        });
    }

    positionChange = (positions) => {
        this.setState({
            position: {
                anchor: this.state.position.anchor,
                popup: positions
            }
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
            position,
            show,
            verticalValues
        } = this.state;

        const popupProps = {
            anchor: this.refs.anchor,
            collision: collision,
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
                            {...position.anchor}
                            horizontalValues={horizontalValues}
                            onChange={this.originChange}
                            verticalValues={verticalValues}
                        />
                    </div>
                    <div>
                        <h4>Position</h4>
                        <ConfigSelector
                            {...position.popup}
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
