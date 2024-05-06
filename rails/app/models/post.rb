class Post < ApplicationRecord
  belongs_to :facility, dependent: :destroy
end
