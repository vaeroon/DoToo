module.exports = function (config) {
	'use strict';

	config.set({
		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// base path, that will be used to resolve files and exclude
		basePath: '../',

		// testing framework to use (jasmine/mocha/qunit/...)
		frameworks: ['jasmine'],

		// list of files / patterns to load in the browser
		files: [
			'app/lib/jquery-2.1.1.min.js',
			'app/lib/angular.js',
			'app/app.js',
			'app/modules/**/*.js',
			'test/lib/**/*.js',
			'test/mock/**/*.js',
			'test/spec/**/*.js'
		],

		ngHtml2JsPreprocessor: {
			// strip this from the file path
			stripPrefix: 'public/',
			stripSufix: '.ext',
			// prepend this to the
			prependPrefix: 'served/',

			// or define a custom transform function
			/*cacheIdFromPath: function (filepath) {
				return filepath;
			},*/

			// setting this option will create only a single module that contains templates
			// from all the files, so you can load them all with module('foo')
			moduleName: 'DoToo'
		},

		// list of files / patterns to exclude
		exclude: [],

		// web server port
		port: 8080,

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: [
			'PhantomJS'
		],

		// Which plugins to enable
		plugins: [
			'karma-phantomjs-launcher',
			'karma-jasmine'
		],

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: false,

		colors: true,

		// level of logging
		// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
		logLevel: config.LOG_INFO

		// Uncomment the following lines if you are using grunt's server to run the tests
		// proxies: {
		//   '/': 'http://localhost:9000/'
		// },
		// URL root prevent conflicts with the site root
		// urlRoot: '_karma_'
	});
};
