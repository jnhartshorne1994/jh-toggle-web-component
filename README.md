# Accessible Accordian

A simple, **accessible**, light-weight Web component written in pure JavaScript, allowing the easy creation of accordion-type components.

## Installation

Install via NPM

```
npm install @jhwc/accessible-accordian-web-component
```

Import it into your JavaScript

``` javascript
import "@jhwc/accessible-accordian-web-component"
```

## Usage

The component comes in three variants, which can be enabled using the following attributes respectively: **default**, **bbc** and simply, no attribute (no styling will be applied).


``` html
<jhwc-accordian default>
    <span class="toggle-box__title" slot="title">
        I am a nice neat title! (click me to toggle the box)
    </span>
    <div class="toggle-box__content" slot="content">
        Here is some toggle-able content!
    </div>
</jhwc-accordian>
```

![jhwc-accordian component](https://i.ibb.co/YZXQkZb/default.png "jhwc-accordian - default")

``` html
<jhwc-accordian bbc>
    <span class="toggle-box__title" slot="title">
        I am a nice neat title! (click me to toggle the box)
    </span>
    <div class="toggle-box__content" slot="content">
        Here is some toggle-able content!
    </div>
</jhwc-accordian>
```

![jhwc-accordian component](https://i.ibb.co/VmDLxHM/bbc.png "jhwc-accordian - bbc")

``` html
<jhwc-accordian>
    <span class="toggle-box__title" slot="title">
        I am a nice neat title! (click me to toggle the box)
    </span>
    <div class="toggle-box__content" slot="content">
        Here is some toggle-able content!
    </div>
</jhwc-accordian>
```

## Requirements

- ES6 `import`
- Nothing!
