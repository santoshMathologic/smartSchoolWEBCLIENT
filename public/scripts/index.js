'use strict';


var api = {
  protocol: 'http',
  server: 'localhost',
  port: 4000,
  baseUrl: '/api/v1',
  loginUrl: '/login',
  registerUrl: '/register',

};


var apiUrl = api.protocol + '://' + api.server + ':' + api.port + api.baseUrl;
var apiLoginUrl = api.protocol + '://' + api.server + ':' + api.port + api.loginUrl;
var apiRegisterUrl = api.protocol + '://' + api.server + ':' + api.port + api.registerUrl;



var initInjector = angular.injector(['ng']);
var $http = initInjector.get('$http');

var app = angular
  .module('smartSchoolApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'ngCookies',
    'ngResource',
    'toaster',
    'angular-confirm',
    'angular-loading-bar',
  ]);


app.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

  $ocLazyLoadProvider.config({
    debug: false,
    events: true,
  });

  $urlRouterProvider.otherwise('login');


  $stateProvider
    .state('login', {
      templateUrl: 'login.html',
      url: '/login',
      controller: 'loginCtrl',
      resolve: {
        loadMyDirectives: function ($ocLazyLoad) {
          return $ocLazyLoad.load(
            {
              name: 'smartSchoolApp',
              files: [
                'scripts/controllers/login.js',
              ]
            })

        }
      }
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'views/dashboard/main.html',
      resolve: {
        loadMyDirectives: function ($ocLazyLoad) {
          return $ocLazyLoad.load(
            {
              name: 'smartSchoolApp',
              files: [
                'scripts/directives/header/header.js',
                'scripts/directives/header/header-notification/header-notification.js',
                'scripts/directives/sidebar/sidebar.js',
                'scripts/directives/sidebar/sidebar-search/sidebar-search.js',
                'scripts/controllers/logout.js',
                'scripts/directives/pagination/pagination.js',
                'scripts/directives/datatable/customtable.js'
                
              ]
            }),
            $ocLazyLoad.load(
              {
                name: 'toggle-switch',
                files: ["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                  "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                ]
              }),
            $ocLazyLoad.load(
              {
                name: 'ngAnimate',
                files: ['bower_components/angular-animate/angular-animate.js']
              })
          $ocLazyLoad.load(
            {
              name: 'ngCookies',
              files: ['bower_components/angular-cookies/angular-cookies.js']
            })
          $ocLazyLoad.load(
            {
              name: 'ngResource',
              files: ['bower_components/angular-resource/angular-resource.js']
            })
          $ocLazyLoad.load(
            {
              name: 'ngSanitize',
              files: ['bower_components/angular-sanitize/angular-sanitize.js']
            })
          $ocLazyLoad.load(
            {
              name: 'ngTouch',
              files: ['bower_components/angular-touch/angular-touch.js']
            })
        }
      }
    })
    .state('dashboard.home', {
      url: '/home',
      controller: 'MainCtrl',
      templateUrl: 'views/dashboard/home.html',
      resolve: {
        loadMyFiles: function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'smartSchoolApp',
            files: [
              'scripts/controllers/main.js',
              'scripts/directives/timeline/timeline.js',
              'scripts/directives/notifications/notifications.js',
              'scripts/directives/chat/chat.js',
              'scripts/directives/dashboard/stats/stats.js'
            ]
          })
        }
      }
    })
    .state('dashboard.userPlan',
            {
                template: '<user-plan></user-plan>',
                url: '/userPlan',
                resolve: {
                    loadMyDirectives: function($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'smartSchoolApp',
                                files: [
                                    'scripts/directives/userPlan/userPlan.js',
                                    
                                ]
                            })
                    }
                }
            })
             .state('dashboard.trainStation',
            {
                template: '<train-station></train-station>',
                url: '/trainStation',
                resolve: {
                    loadMyDirectives: function($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'smartSchoolApp',
                                files: [
                                    'scripts/directives/trainStations/trainStation.js',
                                    
                                ]
                            })
                    }
                }
            })
    .state('dashboard.form', {
      templateUrl: 'views/form.html',
      url: '/form'
    })
    .state('dashboard.blank', {
      templateUrl: 'views/pages/blank.html',
      url: '/blank'
    })
    .state('dashboard.chart', {
      templateUrl: 'views/chart.html',
      url: '/chart',
      controller: 'ChartCtrl',
      resolve: {
        loadMyFile: function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'chart.js',
            files: [
              'bower_components/angular-chart.js/dist/angular-chart.min.js',
              'bower_components/angular-chart.js/dist/angular-chart.css'
            ]
          }),
            $ocLazyLoad.load({
              name: 'smartSchoolApp',
              files: ['scripts/controllers/chartContoller.js']
            })
        }
      }
    })
    .state('dashboard.table', {
      templateUrl: 'views/table.html',
      url: '/table'
    })
    .state('dashboard.panels-wells', {
      templateUrl: 'views/ui-elements/panels-wells.html',
      url: '/panels-wells'
    })
    .state('dashboard.buttons', {
      templateUrl: 'views/ui-elements/buttons.html',
      url: '/buttons'
    })
    .state('dashboard.notifications', {
      templateUrl: 'views/ui-elements/notifications.html',
      url: '/notifications'
    })
    .state('dashboard.typography', {
      templateUrl: 'views/ui-elements/typography.html',
      url: '/typography'
    })
    .state('dashboard.icons', {
      templateUrl: 'views/ui-elements/icons.html',
      url: '/icons'
    })
    .state('dashboard.grid', {
      templateUrl: 'views/ui-elements/grid.html',
      url: '/grid'
    }).state('dashboard.class', {
      templateUrl: 'views/dashboard/class.tmpl.html',
      url: '/class',
      controller: 'classCtrl',
      resolve: {
        loadMyDirectives: function ($ocLazyLoad) {
          return $ocLazyLoad.load(
            {
              name: 'smartSchoolApp',
              files: [
                'scripts/controllers/class.js',
                'scripts/directives/class/class.js'
              ]
            })
        }
      }
    })
    .state('dashboard.viewclass', {
      templateUrl: 'views/dashboard/viewclass.tmpl.html',
      url: '/viewclass',
      controller: 'viewclassCtrl',
      resolve: {
        loadMyDirectives: function ($ocLazyLoad) {
          return $ocLazyLoad.load(
            {
              name: 'smartSchoolApp',
              files: [
                'scripts/controllers/viewclass.js',
                'scripts/directives/class/viewclass.js'
              ]
            })
        }
      }
    }).
    state('dashboard.viewuser', {
      templateUrl: 'views/dashboard/viewuser.tmpl.html',
      url: '/viewuser',
      controller: 'viewuserCtrl',
      resolve: {
        loadMyDirectives: function ($ocLazyLoad) {
          return $ocLazyLoad.load(
            {
              name: 'smartSchoolApp',
              files: [
                'scripts/controllers/viewuser.js',
                'scripts/directives/user/viewuser.js'
              ]
            })
        }
      }
    })
    . state('dashboard.user', {
      templateUrl: 'views/dashboard/user.tmpl.html',
      url: '/user',
      controller: 'userCtrl',
      resolve: {
        loadMyDirectives: function ($ocLazyLoad) {
          return $ocLazyLoad.load(
            {
              name: 'smartSchoolApp',
              files: [
                'scripts/controllers/user.js',
                'scripts/directives/user/user.js'
              ]
            })
        }
      }
    })
    
    

  $urlRouterProvider.otherwise('/login');
}]);


