[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Build Status](https://travis-ci.org/telerik/kendo-react-popup.svg?branch=master)](https://travis-ci.org/telerik/kendo-react-popup)
[![npm version](https://badge.fury.io/js/%40telerik%2Fkendo-react-popup.svg)](https://badge.fury.io/js/%40telerik%2Fkendo-react-popup)

# Kendo UI Popup for React

* [Overview](https://github.com/telerik/kendo-react-popup#overview)
* [Basic Usage](https://github.com/telerik/kendo-react-popup#basic-usage)
* [Installation](https://github.com/telerik/kendo-react-popup#installation)
* [Browser Support](https://github.com/telerik/kendo-react-popup#browser-support)
* [Glossary](https://github.com/telerik/kendo-react-popup#glossary)
  * [Component](https://github.com/telerik/kendo-react-popup#component)
  * [Package](https://github.com/telerik/kendo-react-popup#package)

## Overview

This repository contains the source code and documentation of the Kendo UI Popup component for React.

For more information on upcoming Popup features, refer to the [Roadmap](https://github.com/telerik/kendo-react-popup/blob/master/docs/roadmap.md).

## Basic Usage

The Popup enables you to position a specific content next to a pre-defined anchor element.

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

For more examples and available configuration options, refer to the [Popup documentation](https://github.com/telerik/kendo-react-popup/blob/master/docs/index.md).

## Installation

The Popup is published as a [public scoped NPM package](https://docs.npmjs.com/misc/scope) in the [Telerik organization](https://www.npmjs.com/~telerik) in http://npmjs.org/.

Install it using NPM.

```sh
npm install --save @telerik/kendo-react-popup;
```

Once installed, import the module.

```jsx
// ES2015 module syntax
import Popup from 'kendo-react-popup';
```
```jsx
// CommonJS format
var Popup = require('kendo-react-popup');
```

## Browser Support

The Popup supports all browsers supported by the React framework&mdash;Internet Explorer 9 and later versions.

## Glossary

Below are explained the basic terms that Kendo UI suite for React applies.

### Component

A Component refers to a [React Component](https://facebook.github.io/react/docs/jsx-in-depth.html#html-tags-vs.-react-components).

### Package

A package contains one or more components, developed in a single repository and distributed in a single NPM package.
