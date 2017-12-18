class MainController < BaseController
  get '/' do
    @zmienna = 5
    haml :index
  end

  get '/set' do
    @zmienna = 6
    haml :index
  end

  get '/posts' do
    @post = Post.new('mbilski3', 'This is my first post')
    sd
    haml :posts
  end
end
