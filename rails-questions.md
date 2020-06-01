# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?
rails new app_name -d postgresql -T


2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - get is the http verb we are sending to the server through the url library
library - is the relative path url
:id - the symbol that is in the params portion of an instance variable in the method. 
book - the controller's name
show - the method's name in the controller


3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

I would go to the terminal and create a migration to add the foreign key like this rails generate migration add_foreign_key



4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

A:  rails generate model Person shirt:string pants:string shoes:string



5. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

The rails model shoud be capitalized and singular where as the model should be capitalized and plural