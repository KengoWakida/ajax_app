class PostsController < ApplicationController

  def index #トップページ
    @posts = Post.order(id: "DESC")  #新しい順に表示
  end

  #使わないのでコメントアウト
  #def new
  #end

  def create
    #binding.pry #リクエスト送信 確認テスト
    post = Post.create(content: params[:content])       #postテーブルのcontentカラムのパラメータを保存してpostに格納
    #redirect_to action: :index    #index画面にリダイレクト（遷移）
    render json:{post: post }           #「post:」→キー、「post」→値 renderでjavaScriptに送信
  end
end
