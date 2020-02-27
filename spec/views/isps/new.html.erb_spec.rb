require 'rails_helper'

RSpec.describe "isps/new", type: :view do
  before(:each) do
    assign(:isp, Isp.new(
      name: "MyText",
      lowest_price: 1,
      rating: 1.5,
      max_speed: "MyText",
      description: "MyText",
      contact_no: "MyText",
      email: "MyText",
      image: "MyText",
      url: "MyText"
    ))
  end

  it "renders new isp form" do
    render

    assert_select "form[action=?][method=?]", isps_path, "post" do

      assert_select "textarea[name=?]", "isp[name]"

      assert_select "input[name=?]", "isp[lowest_price]"

      assert_select "input[name=?]", "isp[rating]"

      assert_select "textarea[name=?]", "isp[max_speed]"

      assert_select "textarea[name=?]", "isp[description]"

      assert_select "textarea[name=?]", "isp[contact_no]"

      assert_select "textarea[name=?]", "isp[email]"

      assert_select "textarea[name=?]", "isp[image]"

      assert_select "textarea[name=?]", "isp[url]"
    end
  end
end
