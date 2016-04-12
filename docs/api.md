---
title: Client-Side API
page_title: Client-Side API | Kendo UI Popup for React
description: "Configure the Kendo UI Popup for React through its client-side API reference."
slug: api_popup_kendouiforreact
position: 2
---

# Popup Client-Side API

Represents the Kendo UI Popup component for React.

## Anchor element

#### anchor `Element|Node`

Specifies the element that will be used as an anchor. The popup will open next to that element.

> The `anchor` component/element is required in order to position the popup correctly.

## Boundary detection

### collision `Object`

Configures the collision behavior of the popup.

#### collision.horizontal `String`*(default: "fit")

Defines how to position the popup horizontally when it is not fully visible.

The available options are:

* `fit`&mdash;Moves the popup horizontally until it is fully displayed in the view port.
* `flip`&mdash;Flips the popup position based on the `origin` and `position` properties.

#### collision.vertical `String`*(default: "flip")

Defines how to position the popup vertically when it is not fully visible.

The available options are:

* `fit`&mdash;Moves the popup vertically until it is fully displayed in the view port.
* `flip`&mdash;Flips the popup position based on the `origin` and `position` properties.

## Positioning

### origin `Object`

Specifies how to position the popup element based on achor point.

#### origin.horizontal `String`*(default: "left")

Specifies the alignment point of the anchor, when popup is positioned on the `x` axis.

The available options are:

* `left`&mdash;Use the most left point of the anchor element.
* `center`&mdash;Use the center point of the anchor element.
* `right`&mdash;Use the most right point of the anchor element.

#### origin.vertival `String`*(default: "bottom")

Specifies the alignment point of the anchor, when popup is positioned on the `y` axis.

The available options are:

* `top`&mdash;Use the top point of the anchor element.
* `center`&mdash;Use the center point of the anchor element.
* `bottom`&mdash;Use the bottom point of the anchor element.

### position `Object`

Specifies which point of the popup element to attach to the anchor's origin point.

#### position.horizontal `String`*(default: "left")

Specifies the horizontal alignment point of the popup that will be attached to anchor's `origin` horizontal point.

The available options are:

* `left`&mdash;Use the most left point of the popup element.
* `center`&mdash;Use the center point of the popup element.
* `right`&mdash;Use the most right point of the popup element.

#### position.vertival `String`*(default: "top")

Specifies the vertival alignment point of the popup that will be attached to anchor's `origin` vertival point.

The available options are:

* `top`&mdash;Use the top point of the popup element.
* `center`&mdash;Use the center point of the popup element.
* `bottom`&mdash;Use the bottom point of the popup element.

## Show/hide the Popup component

#### show `Boolean`*(default: false)

Specifies whether to show the popup or hide it.

> The Popup should be rendered initially hidden. Any subsequent props update can show/hide the popup.
