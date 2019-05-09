var ce = {
  arrElements: ['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'meta', 'meter', 'nav', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p ', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr'],
  add: function(newElement) {
    if (typeof newElement == 'string' && !this.arrElements.includes(newElement)) {
      ce.arrElements.push(newElement);
      this.initialize();
    }
    
    if (Array.isArray(newElement)) {
      for (var i in newElement) {
        if (this.arrElements.includes(newElement[i])) continue;
        this.arrElements.push(newElement[i]);
      }
      this.initialize();
    }
  },
  remove: function(elementName) {
    for (var i = this.arrElements.length; i--;) {
      if (this.arrElements[i] === elementName) {
        this.arrElements.splice(i, 1);
      }
    }
    this.initialize();
  },
  createElement: function (elementName, arrParameters) {
    var el = document.createElement(elementName);

    var attributes = {};
    var children = '';

    for (let i in arrParameters) {
      if (typeof arrParameters[i] == "object") {
        attributes = arrParameters[i];
        continue;
      }
      children = arrParameters[i];
    }

    if (attributes) {
      for (var attribute in attributes) {
        el.setAttribute(attribute, attributes[attribute]);
      }
    }

    if (children) {
      if (typeof children == "string" || typeof children == "number") {
        el.appendChild(document.createTextNode(children));
      }
    }

    return el;
  },
  initialize: function () {
    var keys = Object.keys(ce);
    for (var i in keys) {
      var isEssential = keys[i] == 'initialize' || 'arrElements' || 'createElement' || 'add' ||  'remove';
      if (isEssential) continue;

      delete ce[keys[i]];
    }
    for (let i in this.arrElements) {
      ce[this.arrElements[i]] = function () {
        var arrParameters = [];
        for (let i = 0; i < arguments.length; i++) {
          if (arguments[i] == this.arrElements[i]) continue;
          arrParameters.push(arguments[i]);
        }
        return this.createElement(this.arrElements[i], arrParameters);
      }
    }
  }
};
ce.initialize();