# create-element.js

A simple method for create HTML element. 
You don't have to write like below anymore.  

```javascript
const div = document.createElement('div');
div.id = 'divDemo';
div.classList.add('my-class');
div.innerText = 'Hello, world';
```

## Install

```bash
npm install create-element.js
```

## Usage

```javascript
ce.tagName(param1, param2);
```

- `tagName` : HTML tag name of element

```javascript
ce.div();
ce.span();
ce.p();
```

- `String` or `Number` type parameter : value of element.innerText 

```javascript
ce.p('Hello, world');  // <p>Hello, world</p>
ce.span(1234);  // <span>1234</span>
```

- `object` type parameter : attribute name and attribute value of element

```javascript
ce.div({id: 'title'}); // <div id="title"></div>
ce.span({class: 'name'}); // <span class="name"></span>
```

## Examples
```javascript
ce.span({id: 'name', class: 'nice-style'}, 'my name'); // <span id="name" class="nice-style">my name</span>
ce.span(123, {id: 'name', class: 'nice-style'}); // <span id="name" class="nice-style">123</span>
```

## Licence
[MIT License](https://opensource.org/licenses/MIT)

