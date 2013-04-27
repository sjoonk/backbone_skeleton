# encoding: UTF-8

require "sinatra"
require "sinatra/reloader" if development?
require "json"

set :public_folder, settings.root

# dummy data

$entries = [
  {:id => 1, :title => "Bye Bye Ruby!", :author => "James Kate"},
  {:id => 2, :title => "Hello Backbone", :author => "Kim Bates"},
  {:id => 3, :title => "Let It Be", :author => "Beatles"}
]

get "/" do
  send_file File.join(settings.public_folder, 'index.html')  
end

# CRUD

get "/entries" do
  $entries.to_json
end