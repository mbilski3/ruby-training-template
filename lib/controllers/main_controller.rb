class MainController < BaseController
  set :haml, layout: 'layouts/layout'.to_sym

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
    byebug
    haml :posts
  end

  get '/posts/:author' do |author|
    haml :post_show
  end
end
