require './app'

map '/' do
  run MainController
end

map '/api' do
  run JsonController
end
