---
title: API
page_title: API | Kendo UI Popup for React
description: "Configure the Kendo UI Popup for React through its API reference."
slug: api_popup_kendouiforreact
position: 2
---

# Popup API

Represents the Kendo UI Popup component for React.

## Anchor

#### anchor `Element|Node`

Specifies the element that will be used as an anchor. The Popup will open next to that element.

> To correctly position the Popup, make sure you define the `anchor` configuration property.

## Boundary Detection

#### collision `Object`

Configures the collision behavior of the Popup.

#### collision.horizontal `String`*(default: "fit")*

Defines the horizontal position of the Popup when it is not fully visible.

The available options are:

* `fit`&mdash;Moves the Popup horizontally until it is fully displayed in the view port.
* `flip`&mdash;Flips the Popup position based on the `origin` and `position` properties.

#### collision.vertical `String`*(default: "flip")*

Defines the vertical position of the Popup when it is not fully visible.

The available options are:

* `fit`&mdash;Move the Popup vertically until it is fully displayed in the view port.
* `flip`&mdash;Flip the Popup position based on the `origin` and `position` properties.

## Positioning

#### position `Object`

Speacifies the pivot points of the anchor and popup that will be aligned.

#### position.anchor `Object`

Specifies the anchor pivot point.

#### position.anchor.horizontal `String`*(default: "left")*

Specifies the horizontal alignment point of the anchor.

The available options are:

* `left`&mdash;Use the leftmost point of the anchor element.
* `center`&mdash;Use the center point of the anchor element.
* `right`&mdash;Use the rightmost point of the anchor element.

#### position.anchor.vertival `String`*(default: "bottom")*

Specifies the vertical alignment point of the anchor.

The available options are:

* `top`&mdash;Use the top point of the anchor element.
* `center`&mdash;Use the center point of the anchor element.
* `bottom`&mdash;Use the bottom point of the anchor element.

#### position.popup `Object`

Specifies the popup pivot point.

#### position.popup.horizontal `String`*(default: "left")*

Specifies the horizontal alignment point of the Popup.

The available options are:

* `left`&mdash;Use the leftmost point of the Popup element.
* `center`&mdash;Use the center point of the Popup element.
* `right`&mdash;Use the rightmost point of the Popup element.

#### position.popup.vertival `String`*(default: "top")*

Specifies the vertical alignment point of the Popup.

The available options are:

* `top`&mdash;Use the top point of the Popup element.
* `center`&mdash;Use the center point of the Popup element.
* `bottom`&mdash;Use the bottom point of the Popup element.

## Showing and Hiding

#### show `Boolean`*(default: false)*

Specifies whether to show or hide the Popup.
