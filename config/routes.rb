Rails.application.routes.draw do
  resources :clients
  resources :drivers
  resources :admins
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/signup', to: 'admins#signup'
  get '/me', to: 'admins#show'
  post '/login', to: 'admins#login'
  delete '/logout', to: 'admins#logout'
end
