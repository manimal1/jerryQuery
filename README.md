# Assignment

Your assignment will be to build your own jQuery library through a series of different steps. This will help you learn JavaScript.
All subtasks are jQuery equivalent methods.

--- TO BE CLEAR, YOU CANNOT USE JQUERY. YOU MUST USE STANDARD JavaScript BROWSER METHODS TO CREATE "JQUERY EQUIVALENT METHODS". ---

Rules:

  1. every subtask should be in its own folder
  2. every subtask should be tested with [jasmine](http://jasmine.github.io/). Tests should be in the subtask folder named spec
  3. every subtask should be submitted to this repository as a pull request
  4. every subtask should be completed in order. Do not skip to later tasks before all earlier tasks are completed

You should solve one subtask at a time. Every subtask is described by tests. After solving a subtask (all generic tests have passed), you should write your own tests for it. Tests need to span all the features implemented through the subtask.
It would be good for you to have one or more mentors. They should go through your code and give you feedback of what is good, what is bad, and how can you write it better.

## Tasks

All tasks should be compatible with the W3C standard.
Everything needs to work in all major browsers.

Helpful references:

* [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [DevDocs](http://devdocs.io/)
* [Can I Use](http://caniuse.com/)


## 0. Example

You need to write a function that computes the n-th Fibonacci number.
The code can be found in repository /0.example/src.
Also, tests for this subtask can be found in /0.example/spec. Some tests are written as examples, and for some only a starting point are given and you need to complete them. We encourage you to write some new tests on your own.

## 1. Simple Selector function

	Minimal sizzle selector - http://sizzlejs.com/

    	findEl('#some-id');
    	findEl('.some-class');
    	findEl('some-tag');


## 2. Css manipulation

		//set single property
		cssProp(element, cssProperty, value);
		//set multiple properties
		cssProp(element, {cssProperty: value, cssProperty: value});
		//get css property value
		cssProp(element, CSSProperty);


## 3. Css class manipulation

        cssClass.add(element, className);
        cssClass.remove(element, className);
        cssClass.toggle(element, className);
        cssClass.has(element, className);


## 4. DOM manipulation

		dom.remove(element);
		dom.append(targetElement, element);
		dom.after(targetElement, element);
		dom.before(targetElement, element);
		dom.val(targetElement);


## 5. Ajax request function
All data is sent as JSON.

          ajaxReq(url, options);
          ajaxReq(url, {
      	        method: “POST”,
      	        data: {},
                context: this,
                failure: function() {},
                success: function() {},
                complete: function() {}
          });



## 6. Event Listeners

		eventListener.on(element, event, callback);
		//removes a specific callback on a element of the event type
		eventListener.off(element, event, callback);
		//removes all callbacks on a element of the event type
		eventListener.off(element, event);
		//removes all callbacks on a element
		eventListener.off(element);



## 7. Additional Event Listener trigger

		eventListener.trigger(element, event);


## 8. Event delegation
Just a solution that uses a div with a specific class (easier than a general solution)

		eventListener.delegate(monitoredElement, className, event, callback);

## 9. Make learnQuery!
Create your own learnQuery using the knowledge for making the previous functions.
Support chaining!

	Example

		learnQuery('.thisClass').on('click', function() {
			// do stuff
		}).removeClass('thisClass').addClass('anotherClass')
