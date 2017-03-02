/**
 * Created by tony on 2015/3/17.
 */
(function() {
    'use strict';

    angular.module('app', [
        /*
         * Everybody has access to these.
         * We could place these under every feature area,
         * but this is easier to maintain.
         */
        'app.core',

        /*
         * Feature areas
         */
        'app.layout',
        'app.component1',
        'app.component2'
    ]);

})();