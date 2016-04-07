describe('AjaxRequest', function() {
  'use strict';
  var mockHtmlData;

  beforeEach(function() {
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

  it('should make a successful ajax request', function() {
    // write your code here
    var calledUrl = '/beauties-only/safo';
    var succ = function(response, xhr) {
        expect(response).toBe('infinum');
        expect(xhr.status).toBe(200);
      };

    ajaxReq(calledUrl, {
      success: succ,
    });
  });

  it('should make POST ajax request', function() {
    // write your code here
    var succ = function(response, xhr) {
        expect(response).toBe('POST successful');
        expect(xhr.status).toBe(200);
      };

    ajaxReq('/post-msg', {
      success: succ,
      methods: 'POST'
    });
  });

  it('should call a custom function on failure', function() {
    // write your code here
    ajaxReq('/fail-not-there', {
      failure: this.onFailedCall
    });

    expect(this.onFailedCall).toHaveBeenCalled();
  });

  it('should call a custom function on success', function() {

    ajaxReq('/beauties-only/safo', {
      success: this.onSuccessSpy,
      failure: this.onFailureSpy,
    });

    expect(this.onSuccessSpy).toHaveBeenCalled();
    expect(this.onFailureSpy).not.toHaveBeenCalled();
  });

  it('should call a custom function on success with a given context', function() {
    // write your code here
    this.thisContextValue = 'Kreso';

    var successfulFunction = function(data) {
      this.thisContextValue = data;
    };

    ajaxReq('/beauties-only/safo', {
      success: successfulFunction,
      context: this
    });

    expect(this.thisContextValue).toBe('infinum');
  });

  it('should call a custom function when request is completed', function() {
    // write your code here
    ajaxReq('/beauties-only/safo', {
      complete: this.onCompletion
    });

    expect(this.onCompletion).toHaveBeenCalled();
  });
});
