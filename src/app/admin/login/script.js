var formModule = angular.module('app.loginForm', []);

function LoginCtrl($timeout) {
  this.user = {
    email    : '',
    password : ''
  };
  
  function _isEmailValid(emailInput) {
    return !emailInput.$error.required && !emailInput.$error.email;
  }
  
  function _isPasswordValid(passwordInput) {
    return !passwordInput.$error.required && !passwordInput.$error.maxlength && !passwordInput.$error.minlength;
  }
  
  this.blurInput = function(input) {
    input.$focused = false;  
  };
  
  this.focusInput = function(input) {
    input.$focused = true;  
  };
  
  this.isDirty = function(input) {
    return input.$viewValue.length && !input.$focused;
  };
  
  this.isFormInvalid = function(form) {
    return !_isEmailValid(form.email) || !_isPasswordValid(form.password);
  };
  
  this.isLabelActive = function(input) {
    return input.$focused || input.$viewValue.length;
  };
  
  this.submit = function() {
    var self = this;
    
    this.success = true;
    
    $timeout(function() {
      self.success = false;
    }, 5000);
  };
}

formModule
  .controller('LoginCtrl', [
    '$timeout', 
    LoginCtrl
  ]);