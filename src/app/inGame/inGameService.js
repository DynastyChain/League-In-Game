(function() {
	angular.module('league').service('inGameService', inGameService);

	/** @ngInject */
	function inGameService($http, $log) {
		var dat = this;
		dat.getId = getId
		dat.summonerId;
		dat.getCurrentGame = getCurrentGame;

		function getId(URL) {
			$http({
				method: 'GET',
				url: URL
			}).then(function(res) {
				dat.summonerId = res.data[Object.keys(res.data)[0]].id;
				$log.debug(dat.summonerId);
			})
		}

		function buildCurrentGameUrl(id) {
			var url = 'https://na.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/'+id+'?api_key=e1ece664-589a-4ea4-aed2-e0d6f20650be';
			return url;
		}
		function getCurrentGame() {
			var URL = buildCurrentGameUrl(dat.summonerId);
			$http({				
				method: 'GET',
				url: URL
			}).then(function(res) {
				$log.debug(res);
			})
		}
	}
})()