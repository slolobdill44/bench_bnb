json.extract! user, username, password, password_digest, session_token

json.credentials do
  json.username user.username
  json.password user.password
end
