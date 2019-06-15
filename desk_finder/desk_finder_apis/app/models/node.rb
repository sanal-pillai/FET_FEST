class Node < ApplicationRecord
	enum node_type: { path: 1, cubicle:0 }

	CO_ORDINATES = {
		'101': ['10x1', '9x1', '8x1', '7x1', '6x1', '5x1', '4x1', '4x2', '4x3', '3x3'],
		'102': ['10x1', '9x1', '8x1', '7x1', '7x2', '7x3', '6x3'],
		'103': ['10x1', '10x2', '10x3', '9x3'],
		'104': ['10x1', '9x1', '8x1', '7x1', '6x1', '5x1', '4x1', '4x2', '4x3', '4x4', '4x5', '4x6', '4x7', '3x7'],
		'105': ['10x1', '9x1', '8x1', '7x1', '7x2', '7x3', '7x4', '7x5', '7x6', '7x7', '6x7'],
		'106': ['10x1', '10x2', '10x3', '10x4', '10x5', '10x6', '10x7', '9x7'],
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
