module MainHelper
  def time
    Time.now
  end

  def h(text)
    Rack::Utils.escape_html(text)
  end
end
