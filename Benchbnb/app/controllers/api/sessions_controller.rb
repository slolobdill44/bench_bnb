class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(session_params[:username], session_params[:password])

    if user.nil?
      flash[:errors] = ["Invalid credentials!"]
      render json: @user.errors.full_messages, status: 404
    else
      login!(user)
      render 'users/show'
    end
  end

  def destroy
    logout!
    if logout!
      render json: {}
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def session_params
    params.require(:user).permit(:username, :password)
  end
end
