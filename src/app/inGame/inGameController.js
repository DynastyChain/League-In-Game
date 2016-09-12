(function() {
	angular.module('league')
	.controller('inGameController', inGameController);

	/** @ngInject */
	function inGameController($http, inGameService) {
		var vm = this;
		vm.summonerName;
		vm.summonerId;
		vm.getSummonerId = getSummonerId;
		vm.inGameInfo = inGameInfo;
		vm.inGameService = inGameService;

		function buildIdUrl(sumName) {
			var url = 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/'+sumName+'?api_key=e1ece664-589a-4ea4-aed2-e0d6f20650be';
			return url;
		}
		function getSummonerId() {
			var URL = buildIdUrl(vm.summonerName);
			inGameService.getId(URL);	
		}
		function inGameInfo() {			
			inGameService.getCurrentGame();
		}

	}
})()