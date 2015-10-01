require 'net/http'

def test_url(url)
  uri = URI.parse(URI.encode(url))
  res = Net::HTTP.get_response(uri)

  if res.code == "200"
    true
  else
    false
  end
end

def test_site(host, paths)
  paths.map do |path|
    url = File.join(host, path) + ".html"
    res = test_url(url)
    if res == true
      puts "#{url} \033[0;32mGOOD\033[0m"
    else
      puts "#{url} \033[0;31mBAD\033[0m"
    end
    res
  end
end

paths = %w[index gadget iphone pc print tpu]
host = "http://www.genuinemade.com"

if test_site(host, paths).any?{|r| r == false}
  puts "\033[0;31m有地址访问异常 !!\033[0m"
else
  puts "OK !!"
end