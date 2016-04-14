---
title: Overview
page_title: Overview | Kendo UI Popup for React
description: "Learn how to use Kendo UI Popup for React."
slug: overview_popup_kendouiforreact
position: 1
---

# Kendo React Popup Overview (draft)

The Kendo UI Popup for React is a component that enables you to position a specific content next to a pre-defined anchor element.

**Figure 1: A template of the Kendo UI Popup for React**

//todo: template screen

1. Title
2. Content area

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

The Popup allows you to set the component or element that it aligns to through the `anchor` property. If `anchor` is not defined, the Popup positions in the top-left corner of the page.

> To correctly position the Popup, make sure you define the [`anchor`]({% slug api_popup_kendouiforreact %}#anchor-elementnode) configuration property.

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

The Popup component supports a boundary detection, which tries to position the element within the view port, obeying the `origin` and `position` configuration. The `collision` property defines the way the component treats the horizontal or vertical collisions within the boundaries of the view port.

By default, the [`collision`]({% slug api_popup_kendouiforreact %}#collision-object) configuration property is configured to fit horizontally and to flip vertically if the content is not properly displayed.

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

The Popup allows to specify its position based on an anchor point through configuring the `origin` property.

By default, the [`origin`]({% slug api_popup_kendouiforreact %}#origin-object) configuration property is configured to attach the Popup to horizontal left and vertical bottom alignment points.

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

The Popup enables you to specify which point of the Popup element to attach to the origin point of the anchor.

By default, the [`position`]({% slug api_popup_kendouiforreact %}#position-object) configuration property is configured to attach the Popup to the origin point of the anchor using horizontal left and vertical top alignment points.

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

## Keyboard Navigation

Below is the list with the keyboard shortcuts the Popup supports.

| SHORTCUT                            | DESCRIPTION         |
|:---                                 |:---                 |
| `...`                               | Select the last tab.|

## Accessibility

The Popup is WAI ARIA-accessible through the `Tab` key. The `aria-expanded` attribute is set on the currently displayed content of a tab. The `tabindex` attribute will be set to `0` (zero) on the active tab and `-1` (minus one) for the inactive tabs.

## Suggested Links

* [Client-Side API Reference for the Kendo UI Popup Component]({% slug api_popup_kendouiforreact %})
