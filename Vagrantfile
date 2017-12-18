$script = <<SCRIPT
  # upgrade system
  sudo apt-get update

  # install git
  sudo apt-get -y install git

  # install ruby developer packages
  sudo apt-get -y install make build-essential libcurl4-openssl-dev libmysqlclient-dev libreadline-dev libssl-dev libxml2-dev libxslt-dev python-dev zlib1g-dev

  # install rvm
  gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
  curl -sSL https://get.rvm.io | bash -s stable
  source /home/ubuntu/.rvm/scripts/rvm

  # no rdoc for installed gems
  echo 'gem: --no-ri --no-rdoc' >> /home/ubuntu/.gemrc

  # install required ruby versions
  rvm install $(cat /var/www/app/.ruby-version)
  ruby -v

  rvm gemset create $(cat /var/www/app/.ruby-gemset)

  rvm use $(cat /var/www/app/.ruby-version)@$(cat /var/www/app/.ruby-gemset)

  # install bundler
  rvm all do gem install bundler -q --no-doc --no-ri

  # install sinatra
  rvm all do gem install sinatra -q --no-doc --no-ri

  # install thin
  rvm all do gem install thin -q --no-doc --no-ri

SCRIPT

$run_server = <<SCRIPT
  cd /var/www/app && bundle
  if [ -f /var/www/app/tmp/thin.pid ]; then
    thin -R /var/www/app/config.ru -p 9292 -P /var/www/app/tmp/thin.pid -l /var/www/app/log/thin.log -d stop
  fi
  thin -R /var/www/app/config.ru -p 9292 -P /var/www/app/tmp/thin.pid -l /var/www/app/log/thin.log -d start
SCRIPT


Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"

  config.vm.define 'web' do |web|
    web.vm.hostname = 'sinatra-web'
    # web.vm.network :private_network, ip: '192.168.2.100'
    web.vm.network "forwarded_port", guest: 9292, host: 9292
    web.vm.synced_folder "./", "/var/www/app"
    web.vm.provision "setup", inline: $script, privileged: false, type: 'shell'
    web.vm.provision "server", inline: $run_server, run: 'always', privileged: false, type: 'shell'
  end
end
