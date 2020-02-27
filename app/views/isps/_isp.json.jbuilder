json.extract! isp, :id, :name, :lowest_price, :rating, :max_speed, :description, :contact_no, :email, :image, :url, :created_at, :updated_at
json.url isp_url(isp, format: :json)
