class JsonController < BaseController
  get '/data.json' do
    content_type 'application/json'
    JSON({x: 5})
  end

  post '/update' do
    # params['name']
    content_type :json
    {status: :ok, name: params['name']}.to_json
  end
end
