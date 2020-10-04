Rails.application.routes.draw do
  resources :entries
  resources :boards
  namespace :api do
    namespace :v1 do
      resources :users
      resources :boards
      resources :entries
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
