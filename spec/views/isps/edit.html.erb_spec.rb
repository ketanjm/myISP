require 'rails_helper'

RSpec.describe "isps/edit", type: :view do
  before(:each) do
    @isp = assign(:isp, Isp.create!(
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

  it "renders the edit isp form" do
    render

    assert_select "form[action=?][method=?]", isp_path(@isp), "post" do

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
