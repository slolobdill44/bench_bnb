json.extract! @user, username, password, password_digest, session_token


json.partial! 'users/user', user: @user
