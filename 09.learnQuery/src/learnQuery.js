// var learnQuery = (function (elementSelector) {
//   'use strict';
//
  // function cssPropProxy(property, value) {
  //   return cssProp(elementSelector, property, value);
  // }
  //
  // function ajaxReqProxy(url, options) {
  //   return ajaxReq(url, options);
  // }

  // var cssClass = new CssClass();
  // var dom = new Dom();
  // var eventListener = new EventListener();

  // var returnedContext = {
  //   cssProp : cssPropProxy,
  //   ajaxReq : ajaxReqProxy,
  //   cssClass: {
  //     add: function(setClass) {
  //       cssClass.add(elementSelector, setClass);
  //       return returnedContext;
  //     },
  //     remove: function(deleteClass) {
  //       cssClass.remove(elementSelector, deleteClass);
  //       return returnedContext;
  //     },
  //     toggle: function(toggleClass) {
  //       cssClass.toggle(elementSelector, toggleClass);
  //       return returnedContext;
  //     },
  //     has: function(hasClass) {
  //       return cssClass.has(elementSelector, hasClass);
  //     }
  //   },
  //   dom    : {
  //     addClass: function(setClass) {
  //       dom.addClass(elementSelector, setClass);
  //       return returnedContext;
  //     },
  //     removeClass: function(deleteClass) {
  //       dom.removeClass(elementSelector, deleteClass);
  //       return returnedContext;
  //     },
  //     after: function(newElement) {
  //       dom.after(elementSelector, newElement);
  //       return returnedContext;
  //     },
  //     remove: function() {
  //       dom.remove(elementSelector);
  //       return returnedContext;
  //     },
  //     append: function(newElement) {
  //       dom.append(elementSelector, newElement);
  //       return returnedContext;
  //     },
  //     before: function(newElement) {
  //       dom.before(elementSelector, newElement);
  //       return returnedContext;
  //     },
  //     val: function() {
  //       return dom.val(elementSelector);
  //     }
  //   },
  //   eventListener : {
  //     on: function(eventName, callback){
  //       eventListener.on(elementSelector, eventName, callback);
  //       return returnedContext;
  //     },
  //     off: function (eventName, callback){
  //       eventListener.off(elementSelector, eventName, callback);
  //       return returnedContext;
  //     },
  //     trigger: function(eventName, callback){
  //       eventListener.trigger(elementSelector, eventName, callback);
  //       return returnedContext;
  //     },
  //     delegate: function(elementClassName, eventName, callback){
  //       eventListener.delegate(elementSelector, elementClassName, eventName, callback);
  //       return returnedContext;
  //     }
  //   }
  // };
  // return returnedContext;

//   return {
//     cssProp: cssPropProxy,
//     dom: dom
//   }
// })();


function learnQuery(elementSelector) {
  'use strict';

  // would use the new functions below if didn't use IIFE!!!
  // var cssClass = new CssClass();
  // var dom = new Dom();
  // var eventListener = new EventListener();

  function cssPropProxy(property, value) {
    return cssProp(elementSelector, property, value);
  }

  function ajaxReqProxy(url, options) {
    return ajaxReq(url, options);
  }

  var returnedContext = {
    cssProp : cssPropProxy,
    ajaxReq : ajaxReqProxy,
    cssClass: {
      add: function(setClass) {
        cssClass.add(elementSelector, setClass);
        return returnedContext;
      },
      remove: function(deleteClass) {
        cssClass.remove(elementSelector, deleteClass);
        return returnedContext;
      },
      toggle: function(toggleClass) {
        cssClass.toggle(elementSelector, toggleClass);
        return returnedContext;
      },
      has: function(hasClass) {
        return cssClass.has(elementSelector, hasClass);
      }
    },
    dom    : {
      addClass: function(setClass) {
        dom.addClass(elementSelector, setClass);
        return returnedContext;
      },
      removeClass: function(deleteClass) {
        dom.removeClass(elementSelector, deleteClass);
        return returnedContext;
      },
      after: function(newElement) {
        dom.after(elementSelector, newElement);
        return returnedContext;
      },
      remove: function() {
        dom.remove(elementSelector);
        return returnedContext;
      },
      append: function(newElement) {
        dom.append(elementSelector, newElement);
        return returnedContext;
      },
      before: function(newElement) {
        dom.before(elementSelector, newElement);
        return returnedContext;
      },
      val: function() {
        return dom.val(elementSelector);
      }
    },
    eventListener : {
      on: function(eventName, callback){
        eventListener.on(elementSelector, eventName, callback);
        return returnedContext;
      },
      off: function (eventName, callback){
        eventListener.off(elementSelector, eventName, callback);
        return returnedContext;
      },
      trigger: function(eventName, callback){
        eventListener.trigger(elementSelector, eventName, callback);
        return returnedContext;
      },
      delegate: function(elementClassName, eventName, callback){
        eventListener.delegate(elementSelector, elementClassName, eventName, callback);
        return returnedContext;
      }
    }
  };
  return returnedContext;
}
