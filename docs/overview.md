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
            const { show } = this.state.show;

            return (
                <button onClick=this.onClick} ref="anchor">Toggle</option>
                <Popup anchor={this.refs.anchor} show={show}>
                    <ul>
                        <li>Item1</li>
                        <li>Item2</li>
                        <li>Item3</li>
                    </ul>
                </Popup>
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
            const { show } = this.state.show;

            return (
                <button onClick=this.onClick} ref="anchor">Toggle</option>
                <Popup anchor={this.refs.anchor} show={show}>
                    <ul>
                        <li>Item1</li>
                        <li>Item2</li>
                        <li>Item3</li>
                    </ul>
                </Popup>
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
            const { show } = this.state.show;

            const popupProps = {
                anchor: this.refs.anchor,
                collision: {
                    horizontal: Popup.collision.flip,
                    vertical: Popup.collision.fit
                },
                show: show
            };

            return (
                <button onClick=this.onClick} ref="anchor">Toggle</option>
                <Popup {...popupProps}>
                    <ul>
                        <li>Item1</li>
                        <li>Item2</li>
                        <li>Item3</li>
                    </ul>
                </Popup>
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
            const { show } = this.state.show;

            const popupProps = {
                anchor: this.refs.anchor,
                origin: {
                    horizontal: Popup.origin.right,
                    vertical: Popup.origin.bottom
                },
                show: show
            };

            return (
                <button onClick=this.onClick} ref="anchor">Toggle</option>
                <Popup {...popupProps}>
                    <ul>
                        <li>Item1</li>
                        <li>Item2</li>
                        <li>Item3</li>
                    </ul>
                </Popup>
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
            const { show } = this.state.show;

            const popupProps = {
                anchor: this.refs.anchor,
                position: {
                    horizontal: Popup.origin.right,
                    vertical: Popup.origin.top
                },
                show: show
            };

            return (
                <button onClick=this.onClick} ref="anchor">Toggle</option>
                <Popup {...popupProps}>
                    <ul>
                        <li>Item1</li>
                        <li>Item2</li>
                        <li>Item3</li>
                    </ul>
                </Popup>
            );
        }
    }

    ReactDOM.render(
      <BasicDemo />,
      document.getElementById('app')
    );
```
