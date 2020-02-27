require 'rails_helper'

RSpec.describe "isps/index", type: :view do
  before(:each) do
    assign(:isps, [
      Isp.create!(
        name: "MyText",
        lowest_price: 2,
        rating: 3.5,
        max_speed: "MyText",
        description: "MyText",
        contact_no: "MyText",
        email: "MyText",
        image: "MyText",
        url: "MyText"
      ),
      Isp.create!(
        name: "MyText",
        lowest_price: 2,
        rating: 3.5,
        max_speed: "MyText",
        description: "MyText",
        contact_no: "MyText",
        email: "MyText",
        image: "MyText",
        url: "MyText"
      )
    ])
  end

  it "renders a list of isps" do
    render
    assert_select "tr>td", text: "MyText".to_s, count: 2
    assert_select "tr>td", text: 2.to_s, count: 2
    assert_select "tr>td", text: 3.5.to_s, count: 2
    assert_select "tr>td", text: "MyText".to_s, count: 2
    assert_select "tr>td", text: "MyText".to_s, count: 2
    assert_select "tr>td", text: "MyText".to_s, count: 2
    assert_select "tr>td", text: "MyText".to_s, count: 2
    assert_select "tr>td", text: "MyText".to_s, count: 2
    assert_select "tr>td", text: "MyText".to_s, count: 2
  end
end
