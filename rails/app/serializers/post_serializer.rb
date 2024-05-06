class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :content, :latitude, :longitude, :created_at

  def name
    object.facility.name
  end

  def address
    object.facility.address
  end

  def content
    object.facility.content
  end

  def latitude
    object.facility.latitude
  end

  def longitude
    object.facility.longitude
  end

end
