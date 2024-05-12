class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :content, :latitude, :longitude, :created_at, :nursing_room, :anyone_toilet,
             :diaper_changing_station, :powder_corner, :stroller_accessible

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

  def nursing_room
    object.facility.nursing_room
  end

  def anyone_toilet
    object.facility.anyone_toilet
  end

  def diaper_changing_station
    object.facility.diaper_changing_station
  end

  def powder_corner
    object.facility.powder_corner
  end

  def stroller_accessible
    object.facility.stroller_accessible
  end
end
