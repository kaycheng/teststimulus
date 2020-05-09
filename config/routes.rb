Rails.application.routes.draw do
  root "welcome#index"
  devise_for :users, controllers: { 
    registrations: 'users/registrations' 
  }

  # users/:id/follow
  resources :users, only: [] do
    member do
      post :follow
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
