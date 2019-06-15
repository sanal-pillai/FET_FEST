# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

desks = { 
			'2x2': '101-A', '2x4': '101-B', '3x4': '101-C', '3x2': '101-D', 
			'5x2': '102-A', '5x4': '102-B', '7x4': '102-C', '7x2': '102	-D', 
			'5x2': '102-A', '5x4': '102-B', '7x4': '102-C', '7x2': '102	-D', 
		}

(1..3).each do |row|
	(1..3).each do |column|
		node_name = "#{row}x#{column}"
		is_desk = desks.has_key? node_name.to_sym
		puts("#{node_name} #{is_desk}")
	end	
end