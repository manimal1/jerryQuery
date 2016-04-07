var cssClass = (function() {

  function getElement(elementSelector) {
    var nodesArray = Array.prototype.slice.call(document.querySelectorAll(elementSelector));
    var element = nodesArray[0];
    return element;
  }

  function add(elementSelector, setClass) {
    var element = getElement(elementSelector);
    element.className = setClass;
    return element.className;
  }

  function remove(elementSelector, deleteClass) {
    var element = getElement(elementSelector);
    element.classList.remove(deleteClass);
  }

  function toggle(elementSelector, toggleClass) {
    var element = getElement(elementSelector);
    element.classList.toggle(toggleClass);
  }

  function has(elementSelector, hasClass) {
    var element = getElement(elementSelector);
    return element.classList.contains(hasClass);
  }

  return {
    add: add,
    remove: remove,
    toggle: toggle,
    has: has
  };

})();

// without an IIFE, you must first instantiate a new object to use:
// var cssClass = new CssClass();
var CssClass = function() {
  'use strict';

  function getElement(elementSelector) {
    var nodesArray = Array.prototype.slice.call(document.querySelectorAll(elementSelector));
    var element = nodesArray[0];
    return element;
  }

  function add(elementSelector, setClass) {
    var element = getElement(elementSelector);
    element.className = setClass;
    return element.className;
  }

  function remove(elementSelector, deleteClass) {
    var element = getElement(elementSelector);
    element.classList.remove(deleteClass);
  }

  function toggle(elementSelector, toggleClass) {
    var element = getElement(elementSelector);
    element.classList.toggle(toggleClass);
  }

  function has(elementSelector, hasClass) {
    var element = getElement(elementSelector);
    return element.classList.contains(hasClass);
  }

  return {
    add: add,
    remove: remove,
    toggle: toggle,
    has: has
  };

};
