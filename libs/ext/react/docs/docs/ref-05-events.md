---
id: events
title: Event System
permalink: events.html
prev: tags-and-attributes.html
next: dom-differences.html
---

## SyntheticEvent

Your event handlers will be passed instances of `SyntheticEvent`, a cross-browser wrapper around the browser's native event. It has the same interface as the browser's native event, including `stopPropagation()` and `preventDefault()`, except the events work identically across all browsers.

If you find that you need the underlying browser event for some reason, simply use the `nativeEvent` attribute to get it. Every `SyntheticEvent` object has the following attributes:

```javascript
boolean bubbles
boolean cancelable
DOMEventTarget currentTarget
boolean defaultPrevented
number eventPhase
boolean isTrusted
DOMEvent nativeEvent
void preventDefault()
void isDefaultPrevented()
void stopPropagation()
void isPropagationStopped()
DOMEventTarget target
number timeStamp
string type
```

> Note:
>
> As of v0.12, returning `false` from an event handler will no longer stop event propagation. Instead, `e.stopPropagation()` or `e.preventDefault()` should be triggered manually, as appropriate.

## Event pooling

The `SyntheticEvent` is pooled. This means that the `SyntheticEvent` object will be reused and all properties will be nullified after the event callback has been invoked.  
This is for performance reasons.  
As such, you cannot access the event in an asynchronous way.

```javascript
function onClick(event) {
  console.log(event); // => nullified object.
  console.log(event.type); // => "click"
  var eventType = event.type; // => "click"

  setTimeout(function() {
    console.log(event.type); // => null
    console.log(eventType); // => "click"
  }, 0);

  this.setState({clickEvent: event}); // Won't work. this.state.clickEvent will only contain null values.
  this.setState({eventType: event.type}); // You can still export event properties.
}
```

> Note:
>
> If you want to access the event properties in an asynchronous way, you should call `event.persist()` on the event, which will remove the synthetic event from the pool and allow references to the event to be retained by user code.

## Supported Events

React normalizes events so that they have consistent properties across
different browsers.

The event handlers below are triggered by an event in the bubbling phase. To register an event handler for the capture phase, append `Capture` to the event name; for example, instead of using `onClick`, you would use `onClickCapture` to handle the click event in the capture phase.


### Clipboard Events

Event names:

```
onCopy onCut onPaste
```

Properties:

```javascript
DOMDataTransfer clipboardData
```


### Keyboard Events

Event names:

```
onKeyDown onKeyPress onKeyUp
```

Properties:

```javascript
boolean altKey
Number charCode
boolean ctrlKey
function getModifierState(key)
String key
Number keyCode
String locale
Number location
boolean metaKey
boolean repeat
boolean shiftKey
Number which
```


### Focus Events

Event names:

```
onFocus onBlur
```

Properties:

```javascript
DOMEventTarget relatedTarget
```


### Form Events

Event names:

```
onChange onInput onSubmit
```

For more information about the onChange event, see [Forms](/react/docs/forms.html).


### Mouse Events

Event names:

```
onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
onMouseMove onMouseOut onMouseOver onMouseUp
```

The `onMouseEnter` and `onMouseLeave` events propagate from the component being left to the one being entered instead of ordinary bubbling and do not have a capture phase.

Properties:

```javascript
boolean altKey
Number button
Number buttons
Number clientX
Number clientY
boolean ctrlKey
function getModifierState(key)
boolean metaKey
Number pageX
Number pageY
DOMEventTarget relatedTarget
Number screenX
Number screenY
boolean shiftKey
```


### Touch events

To enable touch events, call `React.initializeTouchEvents(true)` before
rendering any component.

Event names:

```
onTouchCancel onTouchEnd onTouchMove onTouchStart
```

Properties:

```javascript
boolean altKey
DOMTouchList changedTouches
boolean ctrlKey
function getModifierState(key)
boolean metaKey
boolean shiftKey
DOMTouchList targetTouches
DOMTouchList touches
```


### UI Events

Event names:

```
onScroll
```

Properties:

```javascript
Number detail
DOMAbstractView view
```


### Wheel Events

Event names:

```
onWheel
```

Properties:

```javascript
Number deltaMode
Number deltaX
Number deltaY
Number deltaZ
```

### Image Events

Event names:

```
onLoad onError
```
