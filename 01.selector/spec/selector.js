describe('Selector', function() {
  'use strict';
  var mockHtmlData;

  beforeEach(function() {
    var temp = affix('.container+#toddler .hidden.toy+input[name="toyName"][value="cuddle bunny"]+input[name="myName"][value="kreso"]+.hidden+.infinum[value="awesome cool"]');
    console.log(temp[0]);
    mockHtmlData = temp[0];
  });

  afterEach(function(){
    $('.container').remove();
  });

  it('should select an HTML ID element', function() {
    var expectedSelectedElement = $('#toddler').get(0);
    var selectedElement = DOMSelector('#toddler')[0];

    expect(selectedElement).toBe(expectedSelectedElement);
    expect(selectedElement instanceof HTMLElement).toBe(true);
  });

  it('should be able to select single tags as HTML', function() {
    var selectedElement = DOMSelector('input')[0];
    var expectedSelectedElement = $(mockHtmlData).find('input').get(0);
    expect(selectedElement).toBe(expectedSelectedElement);
  });

  it('should be able to select multiple tags as an array of HTML nodes', function() {
    var selectedElementsArray = DOMSelector('input');
    var expectedHTMLElementsArray = $.makeArray($('input'));

    expect(selectedElementsArray).toEqual(expectedHTMLElementsArray);
    expect(selectedElementsArray[0] instanceof HTMLElement).toBe(true);
  });

  it('should be able to select single DOM element with a given class', function() {
    var selectedElement = DOMSelector('.hidden')[0];
    var expectedSelectedElement = $(mockHtmlData).find('.hidden').get(0);

    expect(selectedElement).toBe(expectedSelectedElement);
  });

});
