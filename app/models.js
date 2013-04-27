// models.js

var App = App || {};
App.models = App.models || {};

App.models.Entry = Backbone.Model.extend();

App.models.Entries = Backbone.Collection.extend({
	model: App.models.Entry,
	url: "/entries"
});
