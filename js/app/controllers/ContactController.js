function ContactController() {
  var vm = this;

  vm.name = 'Bob';
  vm.email = 'mynameisbob@gmail.com';
  vm.phone = '381837583';

  this.changeName = function() {
    vm.name = 'Something else!'
  };
}

angular
  .module('app')
  .controller('ContactController', ContactController)
