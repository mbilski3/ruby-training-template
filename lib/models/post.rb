class Post
  attr_accessor :author, :text

  def initialize(author, text)
    @author = author
    @text = text
  end

  def humanize
    "#{author}: #{text}"
  end
end
