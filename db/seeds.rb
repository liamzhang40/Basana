# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Team.destroy_all
TeamMembership.destroy_all

user1 = User.create!(name: 'Liam', username: 'lzhang40@binghamton.edu', password: 62030490)
user2 = User.create!(name: 'Joey', username: 'joey@gmail.com', password: 123456)
user3 = User.create!(name: 'Ding', username: 'ding@gmail.com', password: 123456)

team1 = Team.create!(name: 'Squad1')
team2 = Team.create!(name: 'Squad2')
team3 = Team.create!(name: 'Squad3')

TeamMembership.create!(member_id: user3.id, team_id: team1.id)
TeamMembership.create!(member_id: user2.id, team_id: team1.id)
TeamMembership.create!(member_id: user1.id, team_id: team1.id)
TeamMembership.create!(member_id: user2.id, team_id: team2.id)
TeamMembership.create!(member_id: user1.id, team_id: team2.id)
TeamMembership.create!(member_id: user1.id, team_id: team3.id)
