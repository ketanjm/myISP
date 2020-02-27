require "rails_helper"

RSpec.describe IspsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/isps").to route_to("isps#index")
    end

    it "routes to #new" do
      expect(get: "/isps/new").to route_to("isps#new")
    end

    it "routes to #show" do
      expect(get: "/isps/1").to route_to("isps#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/isps/1/edit").to route_to("isps#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/isps").to route_to("isps#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/isps/1").to route_to("isps#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/isps/1").to route_to("isps#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/isps/1").to route_to("isps#destroy", id: "1")
    end
  end
end
