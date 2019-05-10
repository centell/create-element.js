'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var ceEs5 = new Proxy({}, {
  get: function get(target, elementName) {
    var _this = this;

    return function (param1, param2) {
      return _this.createElement(elementName, [param1, param2]);
    };
  },
  createElement: function createElement(elementName, params) {
    var el = document.createElement(elementName);

    for (var i in params) {
      // innerContent
      if (['number', 'string'].includes(_typeof(params[i]))) {
        el.appendChild(document.createTextNode(params[i]));
        continue;
      }

      // attributes
      for (var attrName in params[i]) {
        el.setAttribute(attrName, params[i][attrName]);
      }
    }

    return el;
  }
});