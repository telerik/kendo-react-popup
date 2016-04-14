---
title: Client-Side API
page_title: Client-Side API | Kendo UI Popup for React
description: "Configure the Kendo UI Popup for React through its client-side API reference."
slug: api_popup_kendouiforreact
position: 2
---

# Popup Client-Side API

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

#### origin `Object`

Specifies the position of the Popup element based on the anchor point.

#### origin.horizontal `String`*(default: "left")*

Specifies the alignment point of the anchor, when the Popup is positioned on the `x` axis.

The available options are:

* `left`&mdash;Use the leftmost point of the anchor element.
* `center`&mdash;Use the center point of the anchor element.
* `right`&mdash;Use the rightmost point of the anchor element.

#### origin.vertival `String`*(default: "bottom")*

Specifies the alignment point of the anchor, when the Popup is positioned on the `y` axis.

The available options are:

* `top`&mdash;Use the top point of the anchor element.
* `center`&mdash;Use the center point of the anchor element.
* `bottom`&mdash;Use the bottom point of the anchor element.

#### position `Object`

Specifies which point of the Popup element to attach to the origin point of the anchor.

#### position.horizontal `String`*(default: "left")*

Specifies the horizontal alignment point of the Popup that will be attached to the `origin` horizontal point of the anchor.

The available options are:

* `left`&mdash;Use the leftmost point of the Popup element.
* `center`&mdash;Use the center point of the Popup element.
* `right`&mdash;Use the rightmost point of the Popup element.

#### position.vertival `String`*(default: "top")*

Specifies the vertical alignment point of the Popup that will be attached to the `origin` vertical point of the anchor.

The available options are:

* `top`&mdash;Use the top point of the Popup element.
* `center`&mdash;Use the center point of the Popup element.
* `bottom`&mdash;Use the bottom point of the Popup element.

## Showing and Hiding

#### show `Boolean`*(default: false)*

Specifies whether to show or hide the Popup.

> You must initially render the Popup as hidden. Each subsequent props update allows you to show or hide it.
