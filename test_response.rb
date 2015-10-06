require 'net/http'
require 'nokogiri'
require 'thread'
require 'ruby-prof'

def get_response(url)
  begin
    uri = URI.parse(URI.encode(url.sub(/#\w+/, ""))) 
    Net::HTTP.get_response(uri)
  rescue Exception => e
    puts url
    puts "error"
  end
end

def test_path(root, path, depth = 0)
  url = File.join(root, path)
  res = get_response(url)
  deal_res(url, res)
  test_links(root, res.body) if depth == 0
end

def deal_res(url, res)
  if res.code == "200"
    puts "#{url} \033[0;32mGOOD\033[0m"
  else
    puts "#{url} \033[0;31mBAD\033[0m"
  end
end

def test_site(root, paths)
  thr = paths.map do |path|
    Thread.new{test_path(root, path + ".html")}
  end
  thr.each(&:join)
end

def test_links(root, body)
  Nokogiri::HTML(body).css("link").each do |no|
    test_path(root, no["href"], 1)
  end
  Nokogiri::HTML(body).css("img").each do |no|
    test_path(root, no["src"], 1)
  end
  Nokogiri::HTML(body).css("script").each do |no|
    test_path(root, no["src"], 1) if no["src"]
  end
  # Nokogiri::HTML(body).css("a").each do |no|
  #   if no["href"] and !(/javascript/ === no["href"]) and !(/mailto/ === no["href"])
  #     h = no["href"]
  #     if /^(https?)/ === h
  #       test_path(h, "", 1)
  #     else
  #       test_path(root, h, 1)  
  #     end
  #   end
  # end
end

paths = %w[index gadget iphone pc print tpu samsung]
root = "http://www.genuinemade.com"
puts "start ..."
test_site(root, paths)
puts "end ..."

paths = %w[pc tpu tpu_edge]
root = "http://www.genuinemade.com/s6"
puts "start ..."
test_site(root, paths)
puts "end ..."