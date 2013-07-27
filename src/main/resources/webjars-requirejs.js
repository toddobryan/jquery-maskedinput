/*global requirejs */

// Ensure any request for this webjar brings in dependencies. 
//
requirejs.config({
    shim: {
        'jquery-maskedinput': [ 'webjars!jquery.js' ]
    }
});