---
title: Overview
page_title: Overview | Kendo UI Popup for React
description: "Learn how to use Kendo UI Popup for React."
slug: overview_popup_kendouiforreact
position: 1
---

# Kendo React Popup Overview

The Kendo UI Popup for React is a component that allows to position a specific content next to a pre-defined anchor element.

## Demos

### Default Setup

The example below demonstrates the default setup of a Kendo UI Popup for React.

```html-preview
  <style>
    .k-popup {
        position: absolute;
    }

    .k-popup > div {
        border: 1px solid red;
        padding-right: 2em;
    }
  </style>
  <div id="app"></div>
```
```jsx
    class BasicDemo extends React.Component {
        constructor(props) {
            super(props);

            this.state = { show: false };
        }

        onClick = () => {
            this.setState({
                show: !this.state.show
            });
        }

        render() {
            const { show } = this.state;

            return (
                <div>
                    <button onClick={this.onClick} ref="anchor">Toggle</button>
                    <KendoReactPopup anchor={this.refs.anchor} show={show}>
                        <ul>
                            <li>Item1</li>
                            <li>Item2</li>
                            <li>Item3</li>
                        </ul>
                    </KendoReactPopup>
                </div>
            );
        }
    }

    ReactDOM.render(
      <BasicDemo />,
      document.getElementById('app')
    );
```

## Configuration

### Anchor

The component/element that the Popup component should align to. If `anchor` is not defined, the popup will position in the top left corner of the page.

> The [`anchor`]() configuration property should be defined in order to position correctly the popup.

```html-preview
  <style>
    .anchor {
        position: absolute;
        top: 100px;
        left: 100px;
    }

    .k-popup {
        position: absolute;
    }

    .k-popup > div {
        border: 1px solid red;
        padding-right: 2em;
    }
  </style>
  <div id="app"></div>
```
```jsx
    class BasicDemo extends React.Component {
        constructor(props) {
            super(props);

            this.state = { show: false };
        }

        onClick = () => {
            this.setState({
                show: !this.state.show
            });
        }

        render() {
            const { show } = this.state;

            return (
                <div>
                    <button onClick={this.onClick}>Toggle</button>
                    <div className="anchor" ref="anchor">Anchor</div>
                    <KendoReactPopup anchor={this.refs.anchor} show={show}>
                        <ul>
                            <li>Item1</li>
                            <li>Item2</li>
                            <li>Item3</li>
                        </ul>
                    </KendoReactPopup>
                </div>
            );
        }
    }

    ReactDOM.render(
      <BasicDemo />,
      document.getElementById('app')
    );
```

### Collisions

The Popup component supports a *boundary detection*, which will try to position the element within the view port, obeying the `origin` and `position` configuration.
The *collision* property defines how the component should treat the horizontal/vertical collisions with the boundaries of the view port.

By default, [`collision`]() configuration property is configured to **fit** horizontally and to **flip** vertically, if the content cannot be displayed properly.

```html-preview
  <style>
    #app {
        margin-top:250px;
    }

    .k-popup {
        position: absolute;
    }

    .k-popup > div {
        border: 1px solid red;
        padding-right: 2em;
    }
  </style>
  <div id="app"></div>
```
```jsx
    class BasicDemo extends React.Component {
        constructor(props) {
            super(props);

            this.state = { show: false };
        }

        onClick = () => {
            this.setState({
                show: !this.state.show
            });
        }

        render() {
            const { show } = this.state;

            const popupProps = {
                anchor: this.refs.anchor,
                collision: {
                    horizontal: "fit",
                    vertical: "flip"
                },
                show: show
            };

            return (
                <div>
                    <button onClick={this.onClick} ref="anchor">Toggle</button>
                    <KendoReactPopup {...popupProps}>
                        <ul>
                            <li>Item1</li>
                            <li>Item2</li>
                            <li>Item3</li>
                        </ul>
                    </KendoReactPopup>
                </div>
            );
        }
    }

    ReactDOM.render(
      <BasicDemo />,
      document.getElementById('app')
    );
```

### Origin

Specifies how to position the popup element based on achor point.

By default, [`origin`]() configuration property is configured to attach the popup to horizontal **left** and vertical **bottom** alignment points.

```html-preview
  <style>
    #app {
        margin: 120px 150px;
    }

    .k-popup {
        position: absolute;
    }

    .k-popup > div {
        border: 1px solid red;
        padding-right: 2em;
    }
  </style>
  <div id="app"></div>
```
```jsx
    class BasicDemo extends React.Component {
        constructor(props) {
            super(props);

            this.state = { show: false };
        }

        onClick = () => {
            this.setState({
                show: !this.state.show
            });
        }

        render() {
            const { show } = this.state;

            const popupProps = {
                anchor: this.refs.anchor,
                origin: {
                    horizontal: "right",
                    vertical: "bottom"
                },
                show: show
            };

            return (
                <div>
                    <button onClick={this.onClick} ref="anchor">Toggle</button>
                    <KendoReactPopup {...popupProps}>
                        <ul>
                            <li>Item1</li>
                            <li>Item2</li>
                            <li>Item3</li>
                        </ul>
                    </KendoReactPopup>
                </div>
            );
        }
    }

    ReactDOM.render(
      <BasicDemo />,
      document.getElementById('app')
    );
```

### Position

Specifies which point of the popup element to attach to the anchor's origin point.

By default, [`position`]() configuration property is configured to attach the popup to the anchor's origin point using horizontal **left** and vertical **top** alignment points.

```html-preview
  <style>
    #app {
        margin: 120px 150px;
    }

    .k-popup {
        position: absolute;
    }

    .k-popup > div {
        border: 1px solid red;
        padding-right: 2em;
    }
  </style>
  <div id="app"></div>
```
```jsx
    class BasicDemo extends React.Component {
        constructor(props) {
            super(props);

            this.state = { show: false };
        }

        onClick = () => {
            this.setState({
                show: !this.state.show
            });
        }

        render() {
            const { show } = this.state;

            const popupProps = {
                anchor: this.refs.anchor,
                position: {
                    horizontal: "right",
                    vertical: "top"
                },
                show: show
            };

            return (
                <div>
                    <button onClick={this.onClick} ref="anchor">Toggle</button>
                    <KendoReactPopup {...popupProps}>
                        <ul>
                            <li>Item1</li>
                            <li>Item2</li>
                            <li>Item3</li>
                        </ul>
                    </KendoReactPopup>
                </div>
            );
        }
    }

    ReactDOM.render(
      <BasicDemo />,
      document.getElementById('app')
    );
```
