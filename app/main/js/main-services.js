'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

angular.module('main.services',['ngResource'], function($provide){
    $provide.factory('fetchTasks',['$resource', function($resource){
            var tasks = 
            $resource("https://hd.univeris.com/rest/api/2/search?jql=assignee=currentUser()&os_username=abizhanzadeh&os_password=o0ldouzi&maxResults=5&jsonp-callback=JSON_CALLBACK",{},{get: {method:'JSONP'}, replies:{method:'JSONP'}});
            return tasks;
    }]);
}).value('version', '0.1');