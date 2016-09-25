require.config({
	paths :{
		'angular' : 'lib/angular/angular',
		'angular-animate' : 'lib/angular-animate/angular-animate.js',
		'angular-ui-router' : 'lib/angular-ui-router/release/angular-ui-router.min.js',
		'app' : 'app'
	},

	shim : {
        "angular": {
            exports: "angular"
        },
    
	    'angular-animate': {
        	deps:['angular']
    	},

    	'angular-ui-router':{
    		deps : ['angular']
    	},

		'app' : {
			deps : [ 'angular', 'angular-animate', 'angular-ui-router' ]
		}
	}
});

require(['app'], function(){
	angular.bootstrap(document, ['app'])
})