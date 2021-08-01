Rails.application.routes.draw do
  root to: 'posts#index'  #トップページ
  #get 'posts/new', to: 'posts#new' #削除
  post 'posts', to: 'posts#create'
end
