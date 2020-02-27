Rails.application.routes.draw do
  resources :isps, only: [:index, :create, :show, :update, :destroy]
  root 'hello_world#index'
  get 'isps/:id/edit', to: 'hello_world#index'
  get 'isps/:id', to: 'hello_world#index' 
  get 'isps/new', to: 'hello_world#index' 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
