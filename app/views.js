// views.js

var App = App || {};
App.views = App.views || {};

(function() {
	
	// var tpl = App.templateLoader;

	App.views.Entries = Backbone.View.extend({
		render: function() {
			var that = this;
			App.templateLoader.get('entries', function(tmpl) {
				var html = tmpl(that.collection.toJSON());
				that.$el.html(html);
			});
		}
	});

	App.views.Entry = Backbone.View.extend({
		render: function() {
			var that = this;
			App.templateLoader.get('entry', function(tmpl) {
				var html = tmpl(that.model.toJSON());
				that.$el.html(html);
			});
		}
	});

	
}());



