class Node < ApplicationRecord
	enum node_type: { path: 1, cubicle:0 }

	CO_ORDINATES = {
		'101': ['10X1', '9X1', '8X1', '7X1', '6X1', '5X1', '4X1', '4X2', '4X3', '3X3'],
		'102': ['10X1', '9X1', '8X1', '7X1', '7X2', '7X3', '6X3'],
		'103': ['10X1', '10X2', '10X3', '9X3'],
		'104': ['10X1', '9X1', '8X1', '7X1', '6X1', '5X1', '4X1', '4X2', '4X3', '4X4', '4X5', '4X6', '4X7', '3X7'],
		'105': ['10X1', '9X1', '8X1', '7X1', '7X2', '7X3', '7X4', '7X5', '7X6', '7X7', '6X7'],
		'106': ['10X1', '10X2', '10X3', '10X4', '10X5', '10X6', '10X7', '9X7'],
	}
	ENTRANCES = ['10x1']

	def self.get_coordinates(desk)
		nodes = CO_ORDINATES[desk.to_sym]
		return [] if nodes.blank?
		floor_plan = nodes.map { |item| { id: item, entry_point: false }  }
		ENTRANCES.each do |el|
			entrance = floor_plan.select { |node| node[:id] == el }
			entrance[0][:entry_point] = true
		end
		floor_plan
	end

	def self.get_floor_plan
		file = File.read("#{Rails.root}/public/floor_plan.json")
		data = JSON.parse(file)
		print(data)
		return data
	end
end
