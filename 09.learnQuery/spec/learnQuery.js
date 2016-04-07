describe('LearnQuery', function() {
	// test your masterpiece like it's a french girl
  'use strict';
  var infinumObj;

  // ================== init test specs ===============
  beforeEach(function() {
    var temp = affix('#container .jack');

    infinumObj = {
      infinum: function() {
        console.log('Im called');
        return true;
      }
    };

    spyOn(infinumObj, 'infinum');

    jasmine.Ajax.install();
    this.onSuccessSpy = jasmine.createSpy();
    this.onFailureSpy = jasmine.createSpy();
    this.onFailedCall = jasmine.createSpy();
    this.onCompletion = jasmine.createSpy();

    jasmine.Ajax.stubRequest('/beauties-only/safo').andReturn({
      "status": 200,
      "responseText": 'infinum'
    });


    jasmine.Ajax.stubRequest('/fail-not-there').andReturn({
      "status": 404,
      "responseText": 'request not found'
    });

    jasmine.Ajax.stubRequest('/fail-server-error').andReturn({
      "status": 500,
      "responseText": 'server error'
    });


    jasmine.Ajax.stubRequest('POST', '/post-msg').andReturn({
      "status": 200,
      "responseText": 'POST successful'
    });
  });

  afterEach(function() {
    jasmine.Ajax.uninstall();
  });

  // ================ cssProp tests =============
  it('should set a CSS attribute of an element', function() {
    var selectedElement = $('#container').get(0);
    learnQuery('#container').cssProp('color', 'red');

    expect(selectedElement.style.color).toBe('red');
  });

  it('should return an existing CSS property value of an HTML element', function() {
    $('#container').css('color', 'blue');

    expect(learnQuery('#container').cssProp('color')).toBe('blue');
  });

  it('should set multiple CSS properties of an HTML element', function() {
    // there should be two arguments: cssProp(elementSelector, {multiple name:value pairs})
    var selectedElement = $('#container').get(0);
    learnQuery('#container').cssProp({
      'margin': '5px',
      'color': 'blue'
    });
    expect(selectedElement.style.color).toBe('blue');
  });


  // ================= cssClass tests ==================
  it('should add a css class to the element', function() {
    var selectedElement = $('#container').get(0);
    learnQuery('#container').cssClass.add('thisClass');
    expect(selectedElement.className).toBe('thisClass');
  });

  it('should remove a css class of the element', function() {
    var selectedElement = $('#container').get(0);
    learnQuery('#container').cssClass.add('building');
    learnQuery('#container').cssClass.remove('building');
    expect(selectedElement.classList.contains('building')).toBe(false);
  });

  it('should toggle a css class of the element', function() {
    var selectedElement = $('#container').get(0);
    learnQuery('#container').cssClass.add('building');
    learnQuery('#container').cssClass.toggle('building');
    expect(selectedElement.classList.contains('building')).toBe(false);
  });

  it('should return true if a HTML element has a given css class', function() {
    var selectedElement = $('#container').get(0);
    learnQuery('#container').cssClass.add('building');
    expect(selectedElement.classList.contains('building')).toBe(true);
  });


  // ================= DOM manipulation tests ============
  it('should be able to add a new HTML element after a given HTML element', function() {
    var myElement = document.createElement('div');
    learnQuery('#container').dom.after(myElement);
    expect(myElement).toBe($('#container').next()[0]);
  });

  it('should be able to remove an HTML element', function() {
    var myElement = document.createElement('h1');
    document.body.appendChild(myElement);
    learnQuery('h1').dom.remove();
    expect(document.contains('h1')).toBe(false);
  });

  it('should append a HTML element to the given element', function() {
    var newElement = document.createElement('span');
    learnQuery('#container').dom.append(newElement);
    expect($('#container').children()[1]).toBe(newElement);
  });

  it('should remove all HTML elements with a specific css class', function() {
    var myElement = document.createElement('h5');
    document.body.appendChild(myElement);
    learnQuery('h5').dom.addClass('something');
    learnQuery('.something').dom.remove();
    expect(document.contains('.something')).toBe(false);
  });

  it('should be able to add a new HTML element before a given HTML element', function() {
    var newElement = document.createElement('h3');
    learnQuery('#container').dom.before(newElement);
    expect($('#container').children()[0]).toBe(newElement);
  });

  it('should return a value of a given HTML element', function() {
    var testElements = document.getElementsByClassName('#container');
    var testDivs = Array.prototype.filter.call(testElements, function(testElement){
    return testElement.nodeName === 'DIV';
    });
    testDivs.value = 'check';
    learnQuery(testDivs).dom.val();
    expect(testDivs.value).toBe('check');
  });

  // =================== AJAX tests ===================
  it('should make a successful ajax request', function() {
    var calledUrl = '/beauties-only/safo';
    var succ = function(response, xhr) {
        expect(response).toBe('infinum');
        expect(xhr.status).toBe(200);
      };

    learnQuery().ajaxReq(calledUrl, {
      success: succ,
    });
  });

  it('should make POST ajax request', function() {
    var succ = function(response, xhr) {
        expect(response).toBe('POST successful');
        expect(xhr.status).toBe(200);
      };

    learnQuery().ajaxReq('/post-msg', {
      success: succ,
      methods: 'POST'
    });
  });

  it('should call a custom function on failure', function() {
    learnQuery().ajaxReq('/fail-not-there', {
      failure: this.onFailedCall
    });

    expect(this.onFailedCall).toHaveBeenCalled();
  });

  it('should call a custom function on success', function() {

    learnQuery().ajaxReq('/beauties-only/safo', {
      success: this.onSuccessSpy,
      failure: this.onFailureSpy,
    });

    expect(this.onSuccessSpy).toHaveBeenCalled();
    expect(this.onFailureSpy).not.toHaveBeenCalled();
  });

  it('should call a custom function on success with a given context', function() {
    this.thisContextValue = 'Kreso';

    var successfulFunction = function(data) {
      this.thisContextValue = data;
    };

    learnQuery().ajaxReq('/beauties-only/safo', {
      success: successfulFunction,
      context: this
    });

    expect(this.thisContextValue).toBe('infinum');
  });

  it('should call a custom function when request is completed', function() {
    learnQuery().ajaxReq('/beauties-only/safo', {
      complete: this.onCompletion
    });

    expect(this.onCompletion).toHaveBeenCalled();
  });

  // =================== Event listeners tests ========
  it('should be able to add a click event to a HTML element', function() {
    var selectedElement = $('#container').get(0);

    learnQuery('#container').eventListener.on('click', infinumObj.infinum);

    var event = new Event('click');
    selectedElement.dispatchEvent(event);

    expect(infinumObj.infinum).toHaveBeenCalled();
  });

  it('should be able to add the same event+callback two times to a HTML element', function() {
    var selectedElement = $('#container').get(0);
    learnQuery('#container').eventListener.on('click', infinumObj.infinum);
    learnQuery('#container').eventListener.on('click', infinumObj.infinum);

    var event = new Event('click');
    selectedElement.dispatchEvent(event);
    selectedElement.dispatchEvent(event);

    expect(infinumObj.infinum.calls.count()).toEqual(2);
  });

  it('should be able to remove one click event of a HTML element', function() {
    var selectedElement = $('#container').get(0);

    learnQuery('#container').eventListener.on('click', infinumObj.infinum);
    learnQuery('#container').eventListener.off(['click'], infinumObj.infinum);

    var event = new Event('click');
    selectedElement.dispatchEvent(event);

    expect(infinumObj.infinum).not.toHaveBeenCalled();
  });

  it('should be able to remove all click events of a HTML element', function() {
    var selectedElement = $('#container').get(0);

    learnQuery('#container').eventListener.on('click', infinumObj.infinum);
    learnQuery('#container').eventListener.on('click', infinumObj.infinum);
    learnQuery('#container').eventListener.off(['click'], infinumObj.infinum);

    var event = new Event('click');
    selectedElement.dispatchEvent(event);

    expect(infinumObj.infinum.calls.count()).toEqual(0);
  });

  it('should be able to remove all events of a HTML element', function() {
    var selectedElement = $('#container').get(0);

    learnQuery('#container').eventListener.on('click', infinumObj.infinum);
    learnQuery('#container').eventListener.on('focus', infinumObj.infinum);
    learnQuery('#container').eventListener.off(['click', 'focus'], infinumObj.infinum);

    var event = new Event('click');
    selectedElement.dispatchEvent(event);

    expect(infinumObj.infinum).not.toHaveBeenCalled();
  });

  it('should trigger a click event on a HTML element', function() {
    learnQuery('#container').eventListener.trigger('click', infinumObj.infinum);

    expect(infinumObj.infinum).toHaveBeenCalled();
  });

  it('should delegate an event to elements with a given css class name', function() {
    var selectedElement = $('#container').get(0);
    var new_element = document.createElement('div');
    new_element.className = 'check';
    selectedElement.appendChild(new_element);

    learnQuery('#container').eventListener.delegate('check', 'click', infinumObj.infinum);

    $(new_element).click();

    expect(infinumObj.infinum).toHaveBeenCalled();
  });


  // =============== Method Chaining Tests =================
  it('should allow cssClass method chaining', function() {
    var selectedElement = $('#container').get(0);
    learnQuery('#container').cssClass.add('h2').cssClass.add('h3').cssClass.remove('h2');

    expect(selectedElement.classList.contains('h2')).toBe(false);
    expect(selectedElement.classList.contains('h3')).toBe(true);
  });

  it('should allow dom method chaining', function() {
    var selectedElement = $('#container').get(0);
    learnQuery('#container').dom.append('h4').dom.addClass('domClass');

    expect(selectedElement.classList.contains('domClass')).toBe(true);
  });

  it('should allow eventListener method chaining', function() {
    var selectedElement = $('#container').get(0);
    learnQuery('#container').eventListener.on('click', infinumObj.infinum).eventListener.trigger('click', infinumObj.infinum);

    expect(infinumObj.infinum).toHaveBeenCalled();
  });

  it('should allow multiple methods chaining', function() {
    var selectedElement = $('#container').get(0);
    learnQuery('#container').dom.append('h4').cssClass.add('domClass2');

    expect(selectedElement.classList.contains('domClass2')).toBe(true);
  });
});
