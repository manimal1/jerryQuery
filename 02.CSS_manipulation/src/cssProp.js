/* global document */
function cssProp(elementSelector, property, value) {
  'use strict';

  var nodesArray = Array.prototype.slice.call(document.querySelectorAll(elementSelector));
  var element = nodesArray[0];

  if (typeof property === 'object') {
    return setMultipleProperties(element, property);
  } else if ((typeof property === 'string') && (typeof value == 'undefined')) {
    return getPropertyValue(element, property);
  } else {
    return setSingleProperty(element, property, value);
  }

  function setSingleProperty(element, property, value) {
    element.style[property] = value;
    return element.style[property];
  }

  function setMultipleProperties(element, objProperties) {

    var value;
    var set;

    for (var key in objProperties) {
      value = objProperties[key];
      set = setSingleProperty(element, key, value);
    }
    return set;
  }

  function getPropertyValue(element, property) {
    return element.style[property];
  }
}

// var CssProp = function() {
//   'use strict';

//   this.newProperty = '';
//   this.propertySet = '';
//   this.propValue = '';

//   function getElement(elementSelector) {
//     var nodesArray = Array.prototype.slice.call(document.querySelectorAll(elementSelector));
//     var element = nodesArray[0];
//     return element;
//   }

//   function setSingleProperty(elementSelector, property, value) {
//     var element = getElement(elementSelector);
//     element.style[property] = value;
//     this.propValue = element.style[property];
//     return this;
//   }

//   function setMultipleProperties(elementSelector, objProperties) {
//     var value;

//     for (var key in objProperties) {
//       value = objProperties[key];
//       this.propertySet = setSingleProperty(elementSelector, key, value);
//     }
//     return this;
//   }

//   function getPropertyValue(elementSelector, property) {
//     var element = getElement(elementSelector);
//     this.newProperty = element.style[property];
//     return this;
//   }

//   if (this.propertySet) {
//     return setMultipleProperties(elementSelector, property);
//   } else if (this.newProperty) {
//     return getPropertyValue(elementSelector, property);
//   } else {
//     debugger
//     return setSingleProperty(elementSelector, property, value);
//   }

// };
