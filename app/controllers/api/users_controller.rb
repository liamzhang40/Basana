class Api::UsersController < ApplicationController

  before_action :require_login, except: [:create]

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      # email = UserMailer.welcome_email(@user)
      # email.deliver_now
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    email_piece = params[:email_piece]
    # refactor into User class methods
    # query = "
    #   SELECT
    #     *
    #   FROM
    #     users
    #   WHERE
    #     username LIKE '#{email_piece}%';
    # "
    # @users = ActiveRecord::Base.connection.execute(query)
    @users = User.where("username LIKE '#{email_piece}%'")
    render 'api/users/index'
  end

  private

  def user_params
    params.require(:user).permit(:name, :username, :password, :avatar)
  end
end
