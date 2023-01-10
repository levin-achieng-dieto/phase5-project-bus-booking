Rails.application.routes.draw do
  resources :bookings
  resources :routes
  resources :buses
  resources :clients
  resources :drivers
  resources :admins

  post '/admin-signup', to: 'admins#signup'
  get '/admin-me', to: 'admins#me'
  post '/admin-login', to: 'admins#login'
  delete '/admin-logout', to: 'admins#logout'

  post '/client-signup', to: 'clients#signup'
  get '/client-me', to: 'clients#me'
  post '/client-login', to: 'clients#login'
  delete '/client-logout', to: 'clients#logout'

  post '/driver-signup', to: 'drivers#signup'
  get '/driver-me', to: 'drivers#me'
  post '/driver-login', to: 'drivers#login'
  delete '/driver-logout', to: 'drivers#logout'
end
