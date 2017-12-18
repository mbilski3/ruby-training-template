require 'rubygems'
require 'bundler'
Bundler.require(:default, ENV['RACK_ENV'].to_sym)

ROOT_DIR = File.dirname(__FILE__)


%w(models helpers controllers).each do |dir|
  require_all "./lib/#{dir}"
end
