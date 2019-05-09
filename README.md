# create-element.js

This is an alternative to `document.createElement`.

It was too annoying to write as below. So i made it.
```
const div = document.createElement('div');
div.id = 'divDemo';
div.classList.add('my-class');
div.innerText = 'Hello, world';
```

## install

```
npm install create-element.js
```

## Basic Usage
```
ce.tagName(attribute, innerContents);
```
- `tagName`: HTML tab name of element
- `attribute`: If you put an object as a parameter, it is an attribute. you must use object with `property : value` pairs.
- `innerContents`: If you put an String or Number as a parameter, it is an innerContents.

## Examples
```
ce.p('Hello, world');  // <p>Hello, world</p>
ce.div({id: 'title'}); // <div id="title"></div>
ce.span({id: 'name', class: 'nice-style'}, 'my name'); // <span id="name" class="nice-style">my name</span>
ce.span(123, {id: 'name', class: 'nice-style'}); // <span id="name" class="nice-style">123</span>
```

## Licence
[MIT License](https://opensource.org/licenses/MIT)