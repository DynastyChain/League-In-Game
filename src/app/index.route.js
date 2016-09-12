(function() {
  'use strict';

  angular
    .module('league')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/inGame/inGame.html',
        controller: 'inGameController',
        controllerAs: 'vm'
      })
      // .state('inGame', {
      //   url: '/inGame',
      //   templateUrl: 'app/inGame/inGame.html',
      //   controller: 'inGameController',
      //   controllerAs: 'vm'
      // })

    $urlRouterProvider.otherwise('/');
  }

})();
