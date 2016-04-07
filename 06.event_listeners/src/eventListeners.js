var eventListener = (function() {
  'use strict';

  function on(element, eventName, callback) {
    var selectedElement = document.querySelector(element);
    selectedElement.addEventListener(eventName, callback, false);

    // console.log('the ' + element + ' element now has the ' + eventName + ' event added');
  }

  function off(element, eventName, callback) {
    var selectedElement = document.querySelector(element);
    for (var i = 0; i < eventName.length; i++) {
      selectedElement.removeEventListener(eventName[i], callback, false);
    }
  }

  function trigger(element, eventName, callback) {
    var selectedElement = document.querySelector(element);
    var evt = new Event(eventName);
    selectedElement.addEventListener(eventName, callback, false);
    selectedElement.dispatchEvent(evt);
  }

  function delegate(monitoredElement, elementClassName, eventName, callback) {

    var selectedElement = document.querySelector(monitoredElement);

    function listener(e) {
      if (e.target.classList.contains(elementClassName)) {
        callback();
      }
    }

    selectedElement.addEventListener(eventName, listener, false);
  }

  return {
    on: on,
    off: off,
    trigger: trigger,
    delegate: delegate
  };

})();


var EventListener = function() {
  'use strict';

  function on(element, eventName, callback) {
    var selectedElement = document.querySelector(element);
    selectedElement.addEventListener(eventName, callback, false);

    // console.log('the ' + element + ' element now has the ' + eventName + ' event added');
  }

  function off(element, eventName, callback) {
    var selectedElement = document.querySelector(element);
    for (var i = 0; i < eventName.length; i++) {
      selectedElement.removeEventListener(eventName[i], callback, false);
    }
  }

  function trigger(element, eventName, callback) {
    var selectedElement = document.querySelector(element);
    var evt = new Event(eventName);
    selectedElement.addEventListener(eventName, callback, false);
    selectedElement.dispatchEvent(evt);
  }

  function delegate(monitoredElement, elementClassName, eventName, callback) {

    var selectedElement = document.querySelector(monitoredElement);

    function listener(e) {
      if (e.target.classList.contains(elementClassName)) {
        callback();
      }
    }

    selectedElement.addEventListener(eventName, listener, false);
  }

  return {
    on: on,
    off: off,
    trigger: trigger,
    delegate: delegate
  };

};
