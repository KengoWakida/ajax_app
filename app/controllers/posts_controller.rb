class PostsController < ApplicationController

  def index #トップページ
    @posts = Post.order(id: "DESC")  #新しい順に表示
  end

  #使わないのでコメントアウト
  #def new
  #end

  def create
    Post.create(content: params[:content])
  end
end
