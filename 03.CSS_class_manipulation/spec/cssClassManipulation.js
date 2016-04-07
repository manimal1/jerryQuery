describe('CssClassManipulation', function() {
  // var cssClass;

  beforeEach(function() {
    var temp = affix('.container+#toddler .hidden.toy+input[name="toyName"][value="cuddle bunny"]+input[name="myName"][value="kreso"]+.hidden+.infinum[value="awesome cool"]');
  });

  // use this if you declare the function and do not use an IIFE!!!
  // beforeEach(function() {
  //   cssClass = new CssClass();
  // });

  it('should add a css class to the element', function() {
    var selectedElement = $('#toddler').get(0);
    cssClass.add('#toddler', 'building');
    expect(selectedElement.className).toBe('building');
  });

  it('should remove a css class of the element', function() {
    // write your code here
    var selectedElement = $('#toddler').get(0);
    cssClass.add('#toddler', 'building');
    cssClass.remove('#toddler', 'building');
    expect(selectedElement.classList.contains('building')).toBe(false);
  });

  it('should toggle a css class of the element', function() {
    // write your code here
    var selectedElement = $('#toddler').get(0);
    cssClass.add('#toddler', 'building');
    cssClass.toggle('#toddler', 'building');
    expect(selectedElement.classList.contains('building')).toBe(false);
  });

  it('should return true if a HTML element has a given css class', function() {
    // write your code here
    var selectedElement = $('#toddler').get(0);
    cssClass.add('#toddler', 'building');
    expect(cssClass.has('#toddler', 'building')).toBe(true);
  });

});
