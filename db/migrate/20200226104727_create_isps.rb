class CreateIsps < ActiveRecord::Migration[6.0]
  def change
    create_table :isps do |t|
      t.string :name
      t.integer :lowest_price
      t.float :rating
      t.string :max_speed
      t.text :description
      t.string :contact_no
      t.string :email
      t.text :image
      t.text :url

      t.timestamps
    end
  end
end
