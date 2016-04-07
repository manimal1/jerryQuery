describe('cssProp', function() {
  'use strict';
  // var cssProp;

  beforeEach(function() {
    var temp = affix('.container+#toddler .hidden.toy+input[name="toyName"][value="cuddle bunny"]+input[name="myName"][value="kreso"]+.hidden+.infinum[value="awesome cool"]');
    // cssProp = new CssProp();
  });

  it('should set a CSS attribute of an element', function() {
    var selectedElement = $('#toddler').get(0);
    cssProp('#toddler', 'thebest', 'infinum');
    expect(selectedElement.style.thebest).toBe('infinum');
  });

  it('should return an existing CSS property value of an HTML element', function() {
    $('#toddler').css('color', 'red');
    expect(cssProp('#toddler', 'color')).toBe('red');
  });

  it('should set multiple CSS properties of an HTML element', function() {
    var selectedElement = $('#toddler').get(0);
    cssProp('#toddler', {
      'thebest': 'infinum',
      'color': 'blue'
    });
    expect(selectedElement.style.thebest).toBe('infinum');
  });
});
