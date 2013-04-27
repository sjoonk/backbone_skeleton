// utils.js

var App = App || {};

// http://jsondata.tumblr.com/post/30043887057/backbone-5

App.templateLoader = {

    // Here, we're keeping an object literal around to act as a hash table, and we'll
    // be using it to cache each template that gets loaded from the server.
    templates: {},

	get: function(id, callback) {
        // Can we find this template in the cache?
        if (this.templates[id]) {

            // Yes? OK, lets call our callback function and return.
            return callback(this.templates[id]);
        }

        // Otherwise, lets load it up. We'll build our URL based on the ID passed in.
        var url = '/templates/' + id + '.html',

        // And use a handy jQuery library called Traffic Cop to handle marshalling 
        // requests to the server. This will prevent multiple concurrent requests 
        // for the same resource.
            promise = $.trafficCop(url),
            that = this;

        // Wire up a handler for this request via jQuery's promise API
        promise.done(function (template) {

            // `template` is a string of HTML loaded via `$.ajax`. So here, we 
            // can take the opportunity to pre-compile it for performance. When we 
            // pre-compile a template, it returns a function that we can store in our 
            // cache for future use.
            var tmp = Handlebars.compile(template);
            that.templates[id] = tmp;
            callback(tmp);
        });
	}
};
