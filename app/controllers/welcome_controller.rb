class WelcomeController < ApplicationController

  def index
    @users = User.order(created: :desc)
  end

  def user
    @user = User.find_by(username: params[:username])
  end
  
end