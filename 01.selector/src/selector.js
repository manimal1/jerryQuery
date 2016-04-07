var DOMSelector = function(selectors) {
  var nodesArray = Array.prototype.slice.call(document.querySelectorAll(selectors));
  return nodesArray;
};
