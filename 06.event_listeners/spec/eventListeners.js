describe('EventListeners', function() {
  'use strict';
  var eventListener;
  var infinumObj;

  beforeEach(function() {
    var temp = affix('.container+#toddler .hidden.toy+input[name="toyName"][value="cuddle bunny"]+input[name="myName"][value="kreso"]+.hidden+.infinum[value="awesome cool"]');

    infinumObj = {
      infinum: function() {
        console.log('Check if I am called');
        return true;
      }
    };

    spyOn(infinumObj, 'infinum');
    eventListener = new EventListener();
  });

  it('should be able to add a click event to a HTML element', function() {
    var selectedElement = $('#toddler').get(0);

    eventListener.on('#toddler', 'click', infinumObj.infinum);

    var event = new Event('click');
    selectedElement.dispatchEvent(event);

    expect(infinumObj.infinum).toHaveBeenCalled();
  });

  it('should be able to add the same event+callback two times to a HTML element', function() {
    var selectedElement = $('#toddler').get(0);
    eventListener.on('#toddler', 'click', infinumObj.infinum);
    eventListener.on('#toddler', 'click', infinumObj.infinum);

    var event = new Event('click');
    selectedElement.dispatchEvent(event);
    selectedElement.dispatchEvent(event);

    expect(infinumObj.infinum.calls.count()).toEqual(2);
  });

  it('should be able to remove one click event of a HTML element', function() {
    // write your code here
    var selectedElement = $('#toddler').get(0);

    eventListener.on('#toddler', 'click', infinumObj.infinum);
    eventListener.off('#toddler', ['click'], infinumObj.infinum);

    var event = new Event('click');
    selectedElement.dispatchEvent(event);

    expect(infinumObj.infinum).not.toHaveBeenCalled();
  });

  it('should be able to remove all click events of a HTML element', function() {
    // write your code here
    var selectedElement = $('#toddler').get(0);

    eventListener.on('#toddler', 'click', infinumObj.infinum);
    eventListener.on('#toddler', 'click', infinumObj.infinum);
    eventListener.off('#toddler', ['click'], infinumObj.infinum);

    var event = new Event('click');
    selectedElement.dispatchEvent(event);

    expect(infinumObj.infinum.calls.count()).toEqual(0);
  });

  it('should be able to remove all events of a HTML element', function() {
    // write your code here
    var selectedElement = $('#toddler').get(0);

    eventListener.on('#toddler', 'click', infinumObj.infinum);
    eventListener.on('#toddler', 'focus', infinumObj.infinum);
    eventListener.off('#toddler', ['click', 'focus'], infinumObj.infinum);

    var event = new Event('click');
    selectedElement.dispatchEvent(event);

    expect(infinumObj.infinum).not.toHaveBeenCalled();
  });

  it('should trigger a click event on a HTML element', function() {
    // write your code here
    eventListener.trigger('#toddler', 'click', infinumObj.infinum);

    expect(infinumObj.infinum).toHaveBeenCalled();
  });

  it('should delegate an event to elements with a given css class name', function() {
    // write your code here
    var selectedElement = $('#toddler').get(0);
    var new_element = document.createElement('div');
    new_element.className = 'check';
    selectedElement.appendChild(new_element);

    eventListener.delegate('#toddler', 'check', 'click', infinumObj.infinum);

    $(new_element).click();

    expect(infinumObj.infinum).toHaveBeenCalled();
  });
});
