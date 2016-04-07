function cssProp(elementSelector, property, value) {
  'use strict';
  var currentElement = document.querySelector(elementSelector);

  if (value !== undefined) {
    currentElement.style[property] = value;
  }
  else if (typeof properties !== 'object') {
    console.log(currentElement.style[property]);
    return currentElement.style[property];
  }
  else {
    for (var p in property) {
      if (property.hasOwnProperty(p)) {
        currentElement.style[p] = property[p];
      }
    }
  }
}
