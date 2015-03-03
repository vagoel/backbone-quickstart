/*global require*/
'use strict';
require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery.min',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore-min',
        domReady:'../bower_components/domready/domReady',
        text:'../bower_components/text/text'
    },
    //Remember: only use shim config for non-AMD scripts,
    //scripts that do not already call define(). The shim
    //config will not work correctly if used on AMD scripts,
    //in particular, the exports and init config will not
    //be triggered, and the deps config will be confusing
    //for those cases.
    shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require(['backbone','domReady'], function(backbone,domReady) {
	domReady(function(){
		alert("hey there,I am ready");
	})
});

