class BaseController < Sinatra::Base
  configure :development do
    use BetterErrors::Middleware
    BetterErrors.application_root = File.expand_path("..", __FILE__)
    BetterErrors::Middleware.allow_ip! "10.0.2.2"
    register Sinatra::Reloader
  end

  configure do
    set :root, ROOT_DIR
    set :views, File.join(ROOT_DIR, 'lib', 'views')

    # sessions
    # generate by `ruby -e "require 'securerandom'; puts SecureRandom.hex(64)"`
    enable :sessions
    enable :reloader
    set :session_secret, 'b1b52fca01d051a1014ec7a96ff54df4422b0787b7a6895fbd1d3ffd709461a08924018001ce977abe7e195a942ce60008fbadbe14765d4d24722d8632047c00'

    # work-around: https://github.com/sinatra/sinatra/issues/518
    set :protection, except: :json_csrf

    # http://stackoverflow.com/questions/20932779/reading-parameters-on-sinatra-post
    use Rack::PostBodyContentTypeParser

    # security
    use Rack::Protection::EscapedParams
    use Rack::Protection::AuthenticityToken

    # logger
    file = File.new("#{settings.root}/log/#{settings.environment}.log", 'a+')
    file.sync = true
    use Rack::CommonLogger, file
  end

  helpers MainHelper
end
