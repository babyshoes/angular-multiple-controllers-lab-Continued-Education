function StaffController() {
  var vm = this;

  vm.name = 'Yes Man';
  vm.email = 'urright@gmail.com';
  vm.phone = '11111111';
}

angular
  .module('app')
  .controller('StaffController', StaffController)
