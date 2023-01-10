Rails.application.routes.draw do
  resources :routes
  resources :bookings
  resources :buses
  resources :clients
  # resources :drivers
  # resources :admins

  post '/admin-signup', to: 'admins#signup'
  get '/admin-me', to: 'admins#show'
  post '/admin-login', to: 'admins#login'
  delete '/admin-logout', to: 'admins#logout'

  post '/client-signup', to: 'clients#signup'
  get '/client-me', to: 'clients#show'
  post '/client-login', to: 'clients#login'
  delete '/client-logout', to: 'clients#logout'

  post '/driver-signup', to: 'drivers#signup'
  get '/driver-me', to: 'drivers#show'
  post '/driver-login', to: 'drivers#login'
  delete '/driver-logout', to: 'drivers#logout'
end
