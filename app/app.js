// app.js

var App = App || {};

App.Router = Backbone.Router.extend({

	routes: {
		"": "home",
		"entries/:id" : "entry"
	},
	
	home: function() {
		this.get_entries(function(entries) {
			var view = new App.views.Entries({el: '#container', collection: entries});
			view.render();
		});
	},
	
	entry: function(id) {
		console.log(id)
		this.get_entries(function(entries) {
			var entry = entries.get(id);
			var view = new App.views.Entry({el: '#container', model: entry});
			view.render();
		});
	},
	
	get_entries: function(callback) {
		var entries = new App.models.Entries();
		entries.fetch({
			success: function() {  callback(entries); }
		});
	}
 	
}); 

$(function() {

	App.router = new App.Router();
	Backbone.history.start();

});