function ajaxReq(url, options) {
  "use strict";

  var request = new XMLHttpRequest();
  request.onreadystatechange = returnedContents;

  function returnedContents() {

    if (request.readyState < 4) {
        return;
    }

    if (request.status !== 200) {
      if (options && options.failure) {
        options.failure(request.responseText);
      }
      return;
    }

    if ((request.readyState === 4) && (request.status === 200)) {
      if (options && options.success && options.context) {
        options.success.call(options.context, request.responseText);
      }
      else if (options && options.success) {
        options.success(request.responseText, request);
      } else if (options && options.complete) {
        options.complete(request.responseText);
      } else {
        options.call(request.responseText);
      }
    }
  }

  if (options && options.methods) {
    request.open('POST', url);
  } else {
    request.open('GET', url);
  }
  request.send();
}
