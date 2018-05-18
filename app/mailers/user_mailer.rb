class UserMailer < ApplicationMailer
  default from: 'basanaadmin@basana.com'

  def welcome_email(user)
    @user = user

    mail(to: @user.username, subject: 'Welcome to Basana!')
  end
end
