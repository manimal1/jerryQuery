var eventListener = (function() {
  // // Object 'elements' contains objects that have property 'id'.
  // // The property 'id' contains object that has events as properties and every event
  // // has an array that contains callbacks.
  // var elements = {};
  // var customIdCounter = 0;

  // // Function returns custom id of a DOM element represented with elementSelector.
  // // If element doesn't have attribute data-myid, function sets that attribute to the
  // // value newID.
  // function generateElementID(elementSelector) {
  //   if (!elementSelector.hasAttribute('data-myid')) {
  //     elementSelector.setAttribute('data-myid', customIdCounter);
  //     customIdCounter ++;
  //   }
  //   var id = parseInt(elementSelector.getAttribute('data-myid'), 10);
  //   return id;
  // }

  // // If object doesn't have any event, function removes element from object 'elements'.
  // function clearObject(customID) {
  //   var isLast = true;
  //   for (var e in elements[customID]) {
  //     if (elements[customID].hasOwnProperty(e)) {
  //       isLast = false;
  //       break;
  //     }
  //   }
  //   if (isLast) {
  //     delete elements[customID];
  //   }
  // }

  // // Function returns true if element or his parent(or any element till
  // // monitoredElement) has class className, false otherwise.
  // function hasClass(element, monitoredElementSelector, className) {
  //   var monitoredElement = document.querySelector(monitoredElementSelector);
  //   while (element !== monitoredElement) {
  //     var elementClassName = [];
  //     elementClassName = element.className.split(/\s+/);
  //     var index = elementClassName.indexOf(className);
  //     if (index !== -1) {
  //       return true;
  //     }
  //     element = element.parentNode;
  //   }
  //   return false;
  // }

  // return {
  //   on: function(elementSelector, event, callback) {
  //     var observedElement = document.querySelector(elementSelector);
  //     if (!observedElement) {
  //       console.log('Selected element doesn\'t exist.');
  //       return null;
  //     }
  //     var customID = generateElementID(observedElement);

  //     if (!elements[customID]) {
  //       var objectID = {};

  //       elements[customID] = objectID;
  //       objectID[event] = [callback];

  //       observedElement.addEventListener(event, callback, false);
  //     }
  //     else {
  //       if (event in elements[customID]) {
  //         if (elements[customID][event].indexOf(callback) !== -1) {
  //           console.log('Event ' + event + ' with selected callback already exists.');
  //         }
  //         else {
  //           elements[customID][event].push(callback);
  //           observedElement.addEventListener(event, callback, false);
  //         }
  //       }
  //       else {
  //         observedElement.addEventListener(event, callback, false);
  //         elements[customID][event] = [callback];
  //       }
  //     }
  //   },

  //   off: function(elementSelector, event, callback) {
  //     var observedElement = document.querySelector(elementSelector);
  //     if (!observedElement) {
  //       console.log('Selected element doesn\'t exist.');
  //       return null;
  //     }
  //     var customID = generateElementID(observedElement);
  //     if (!elements[customID]) {
  //       console.log('Selected element doesn\'t have any event listeners.');
  //       return null;
  //     }

  //     if (callback !== undefined) {
  //       if (event in elements[customID]) {
  //         var indexOfCallback = elements[customID][event].indexOf(callback);
  //         if (indexOfCallback !== -1) {
  //           observedElement.removeEventListener(event, callback, false);
  //           elements[customID][event].splice(indexOfCallback, 1);
  //           if (elements[customID][event].length === 0) { // checks if that was the last callback, then removes that event
  //             delete elements[customID][event];
  //             // checks if that was the last event in event listeners, then removes that event listener from array
  //             clearObject(customID);
  //           }
  //           else {
  //             console.log('Undefined callback.');
  //           }
  //         }
  //         else {
  //           console.log('Undefined callback.');
  //         }
  //       }
  //       else {
  //         console.log('Undefined event.');
  //       }
  //     }
  //     else if (event !== undefined) {
  //       if (event in elements[customID]) {
  //         for (var j = 0; j < elements[customID][event].length; j++) {
  //           observedElement.removeEventListener(event, elements[customID][event][j], false);
  //         }
  //         delete elements[customID][event];
  //         clearObject(customID);
  //       }
  //       else {
  //         console.log('Undefined event.');
  //       }
  //     }
  //     else {
  //       for (var e in elements[customID]) {
  //         if (elements[customID].hasOwnProperty(e)) {
  //           for (var c = 0; c < elements[customID][e].length; c++) {
  //             observedElement.removeEventListener(e, elements[customID][e][c], false);
  //           }
  //         }
  //       }
  //       delete elements[customID];
  //     }
  //   },

  //   trigger: function(elementSelector, event) {
  //     var observedElement = document.querySelector(elementSelector);
  //     if (!observedElement) {
  //       console.log('Selected element doesn\'t exist.');
  //       return null;
  //     }
  //     var evt = document.createEvent('HTMLEvents');
  //     evt.initEvent(event, true, true);
  //     observedElement.dispatchEvent(evt);
  //   },

  //   delegate: function(monitoredElementSelector, className, event, callback) {
  //     var newCallback = function(e){
  //       if (hasClass(e.target, monitoredElementSelector, className)) {
  //         callback();
  //       }
  //     };
  //     this.on(monitoredElementSelector, event, newCallback);
  //   }
  // };
})();
