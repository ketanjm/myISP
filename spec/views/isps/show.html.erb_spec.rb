require 'rails_helper'

RSpec.describe "isps/show", type: :view do
  before(:each) do
    @isp = assign(:isp, Isp.create!(
      name: "MyText",
      lowest_price: 2,
      rating: 3.5,
      max_speed: "MyText",
      description: "MyText",
      contact_no: "MyText",
      email: "MyText",
      image: "MyText",
      url: "MyText"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/2/)
    expect(rendered).to match(/3.5/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/MyText/)
  end
end
