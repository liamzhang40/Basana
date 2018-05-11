class Api::UsersController < ApplicationController

  before_action :require_login, except: [:create]

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    # can use include here??
    # include teams?
    member_ids = params[:member_ids]
    @members = member_ids.map { |id| User.find(id.to_i) }
    render 'api/users/index'
  end

  private

  def user_params
    params.require(:user).permit(:name, :username, :password)
  end
end
