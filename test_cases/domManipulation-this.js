var Dom = function() {
  'use strict';

  this.newAddedClass = '';
  this.elementAddedAfter = '';
  this.deletedChildElement = '';
  this.appendedElement = '';
  this.elementAddedBefore = '';
  this.elementValue = '';

  function getElement(elementSelector) {
    var nodesArray = Array.prototype.slice.call(document.querySelectorAll(elementSelector));
    var element = nodesArray[0];
    return element;
  }

  function addClass(elementSelector, setClass) {
    var element = getElement(elementSelector);
    element.className = setClass;
    this.newAddedClass = element.className;
    return this;
  }

  function removeClass(elementSelector, deleteClass) {
    var element = getElement(elementSelector);
    element.classList.remove(deleteClass);
  }

  function after(elementSelector, newElement) {
    var element = getElement(elementSelector);
    this.elementAddedAfter = element.parentElement.appendChild(newElement);
    return this;
  }

  function remove(elementSelector) {
    var element = getElement(elementSelector);
    var parent = element.parentNode;
    this.deletedChildElement = parent.removeChild(element);
    return this;
  }

  function append(elementSelector, newElement) {
    var element = getElement(elementSelector);
    this.appendedElement = element.appendChild(newElement);
    return this;
  }

  function before(elementSelector, newElement) {
    var element = getElement(elementSelector);
    this.elementAddedBefore = element.insertBefore(newElement, element.childNodes[0]);
    return this;
  }

  function val(htmlElement) {
    this.elementValue = htmlElement.value;
    return this;
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
