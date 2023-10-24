Rails.application.routes.draw do
  root 'home#index'
  namespace :api do
    resources :greetings, only: [] do
      collection do
        get 'random_greeting'
      end
    end
  end
end