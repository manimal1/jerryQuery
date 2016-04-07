describe('domManipulation', function() {

  beforeEach(function() {
    var temp = affix('.container .jack .something');
  });

  beforeEach(function() {
    dom = new Dom();
  });

  it('should be able to add a new HTML element after a given HTML element', function() {
    var myElement = document.createElement('div');
    dom.after('.something', myElement);
    expect(myElement).toBe($('.something').next()[0]);
  });

  it('should be able to remove an HTML element', function() {
    // write your code here
    var myElement = document.createElement('h1');
    document.body.appendChild(myElement);
    dom.remove('h1');
    expect(document.contains('h1')).toBe(false);
  });

  it('should append a HTML element to the given element', function() {
    // write your code here
    var newElement = document.createElement('span');
    dom.append('.jack', newElement);
    expect($('.jack').children()[1]).toBe(newElement);
  });

  it('should remove all HTML elements with a specific css class', function() {
    // write your code here
    var myElement = document.createElement('h5');
    document.body.appendChild(myElement);
    dom.addClass('h5', '.something');
    dom.remove('.something');
    expect(document.contains('.something')).toBe(false);
  });

  it('should be able to add a new HTML element before a given HTML element', function() {
    // write your code here
    var newElement = document.createElement('h3');
    dom.before('.jack', newElement);
    expect($('.jack').children()[0]).toBe(newElement);
  });

  // this is the exact same wording of test #1 above ****************************
  it('should be able to add a new HTML element after a given HTML element', function() {
    // write your code here
    var newElement = document.createElement('span');
    dom.append('.jack', newElement);
    expect($('.jack').children()[1]).toBe(newElement);
  });

  it('should return a value of a given HTML element', function() {
    // write your code here
    var testElements = document.getElementsByClassName('.jack');
    var testDivs = Array.prototype.filter.call(testElements, function(testElement){
    return testElement.nodeName === 'DIV';
    });
    testDivs.value = 'check';
    dom.val(testDivs);
    expect(testDivs.value).toBe('check');
  });

  it('should be able to handle the case when one of the elements does not exist', function() {
    // write your code here

  });
});
