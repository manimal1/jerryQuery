var dom = (function() {

  function getElement(elementSelector) {
    var nodesArray = Array.prototype.slice.call(document.querySelectorAll(elementSelector));
    var element = nodesArray[0];
    return element;
  }

  function addClass(elementSelector, setClass) {
    var element = getElement(elementSelector);
    element.className = setClass;
    return element.className;
  }

  function removeClass(elementSelector, deleteClass) {
    var element = getElement(elementSelector);
    element.classList.remove(deleteClass);
  }

  function after(elementSelector, newElement) {
    var element = getElement(elementSelector);
    if (typeof newElement === 'string') {
      newElement = document.createElement(newElement);
    }
    return element.parentElement.appendChild(newElement);
  }

  function remove(elementSelector) {
    var element = getElement(elementSelector);
    var parent = element.parentNode;
    return parent.removeChild(element);
  }

  function append(elementSelector, newElement) {
    var element = getElement(elementSelector);
    if (typeof newElement === 'string') {
      newElement = document.createElement(newElement);
    }
    return element.appendChild(newElement);
  }

  function before(elementSelector, newElement) {
    var element = getElement(elementSelector);
    return element.insertBefore(newElement, element.childNodes[0]);
  }

  function val(htmlElement) {
    return htmlElement.value;
  }

  return {
    addClass: addClass,
    after: after,
    remove: remove,
    append: append,
    before: before,
    val: val
  };
})();

var Dom = function() {
  'use strict';

  function getElement(elementSelector) {
    var nodesArray = Array.prototype.slice.call(document.querySelectorAll(elementSelector));
    var element = nodesArray[0];
    return element;
  }

  function addClass(elementSelector, setClass) {
    var element = getElement(elementSelector);
    element.className = setClass;
    return element.className;
  }

  function removeClass(elementSelector, deleteClass) {
    var element = getElement(elementSelector);
    element.classList.remove(deleteClass);
  }

  function after(elementSelector, newElement) {
    var element = getElement(elementSelector);
    if (typeof newElement === 'string') {
      newElement = document.createElement(newElement);
    }
    return element.parentElement.appendChild(newElement);
  }

  function remove(elementSelector) {
    var element = getElement(elementSelector);
    var parent = element.parentNode;
    return parent.removeChild(element);
  }

  function append(elementSelector, newElement) {
    var element = getElement(elementSelector);
    if (typeof newElement === 'string') {
      newElement = document.createElement(newElement);
    }
    return element.appendChild(newElement);
  }

  function before(elementSelector, newElement) {
    var element = getElement(elementSelector);
    return element.insertBefore(newElement, element.childNodes[0]);
  }

  function val(htmlElement) {
    return htmlElement.value;
  }

  return {
    addClass: addClass,
    after: after,
    remove: remove,
    append: append,
    before: before,
    val: val
  };

};
