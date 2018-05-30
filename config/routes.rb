Rails.application.routes.draw do
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :index]
    resource :session, only: [:create, :destroy]
    resources :teams, except: [:new, :edit]
    resources :projects, except: [:new, :edit]
    resources :tasks, except: [:new, :edit]
  end
  root "static_pages#root"
end
