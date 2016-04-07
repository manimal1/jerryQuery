function ajaxReq(url, options) {
  'use strict';
  var request = new XMLHttpRequest();
  options = options || {};
  options.method = options.method || 'GET';

  request.open(options.method, url, true);
  options.data = options.data || null;

  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      var status = request.status;
      var context = options.context || window;

      if (status >= 200 && status < 300) {
        if (options.success) {
          options.success.call(context, request.responseText);
        } else {
          console.log('success');
        }
      }
      else {
        if (options.failure) {
          options.failure.call(context);
        } else {
          console.log('failure');
        }
      }
      if (options.complete) {
        options.complete.call(context);
      }
    }
  };

  request.send(options.data);
}
