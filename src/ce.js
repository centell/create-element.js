'use strict';

const ce = new Proxy({}, {
  get: function(target, elementName) {
    return (param1, param2) => this.createElement(elementName, [param1, param2]);
  },
  createElement: function(elementName, params) {
    const el = document.createElement(elementName);

    for (let i in params) {
      // innerContent
      if (['number', 'string'].includes(typeof params[i]) ) {
        el.appendChild(document.createTextNode(params[i]));
        continue;
      }

      // attributes
      for (let attrName in params[i]) {
        el.setAttribute(attrName, params[i][attrName]);
      }
    }

    return el;
  },
});
