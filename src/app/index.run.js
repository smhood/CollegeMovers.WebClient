(function() {
  'use strict';

  angular
    .module('collegeMoversWebClient')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
