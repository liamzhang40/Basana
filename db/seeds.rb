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
Project.destroy_all
Task.destroy_all

10.times do
  User.create!(
    name: Faker::Name.name,
    username: Faker::Internet.email,
    password: 123456
  )
end
user1 = User.create!(name: 'Demo User', username: 'demo@gmail.com', password: 62030490)
user2 = User.create!(name: 'Demo User2', username: 'demo2@gmail.com', password: 62030490)

5.times do
  Team.create!(name: Faker::Team.name)
end

20.times do
  TeamMembership.create(
    member_id: User.all.sample.id,
    team_id: Team.all.sample.id
  )
end

20.times do
  Project.create!(
    creator_id: User.all.sample.id,
    team_id: Team.all.sample.id,
    name: Faker::Commerce.product_name,
    description: Faker::LeagueOfLegends.quote
  )
end

30.times do
  Task.create!(
    project_id: Project.all.sample.id,
    assignee_id: User.all.sample.id,
    name: Faker::Commerce.product_name,
    description: Faker::HowIMetYourMother.quote,
    due_date: Faker::Time.between(Date.today, Date.today.at_beginning_of_year.next_year)
  )
end



# user2 = User.create!(name: 'Joey', username: 'joey@gmail.com', password: 123456)
# user3 = User.create!(name: 'Ding', username: 'ding@gmail.com', password: 123456)
#
# team1 = Team.create!(name: 'Squad1')
# team2 = Team.create!(name: 'Squad2')
# team3 = Team.create!(name: 'Squad3')
#
# TeamMembership.create!(member_id: user3.id, team_id: team1.id)
# TeamMembership.create!(member_id: user2.id, team_id: team1.id)
# TeamMembership.create!(member_id: user1.id, team_id: team1.id)
# TeamMembership.create!(member_id: user2.id, team_id: team2.id)
# TeamMembership.create!(member_id: user1.id, team_id: team2.id)
# TeamMembership.create!(member_id: user1.id, team_id: team3.id)
#
# project1 = Project.create!(creator_id: user3.id, team_id: team1.id, name: 'Project1', description: 'Something')
# project2 = Project.create!(creator_id: user3.id, team_id: team1.id, name: 'Project2', description: 'Something')
# project3 = Project.create!(creator_id: user3.id, team_id: team1.id, name: 'Project3', description: 'Something')
# project4 = Project.create!(creator_id: user2.id, team_id: team2.id, name: 'Project4', description: 'Something')
# project5 = Project.create!(creator_id: user2.id, team_id: team2.id, name: 'Project5', description: 'Something')
# project6 = Project.create!(creator_id: user1.id, team_id: team3.id, name: 'Project6', description: 'Something')
#
# Task.create!(project_id: project1.id, assignee_id: user3.id, name: 'Task1', description: 'Something', due_date: '2018-10-11')
# Task.create!(project_id: project1.id, name: 'Task2', description: 'Something', due_date: '2018-10-18')
# Task.create!(project_id: project1.id, assignee_id: user3.id, name: 'Task3', description: 'Something', due_date: '2018-06-11')
# Task.create!(project_id: project1.id, name: 'Task4', description: 'Something', due_date: '2018-09-22')
# Task.create!(project_id: project2.id, assignee_id: user1.id, name: 'Task5', description: 'Something', due_date: '2019-01-11')
# Task.create!(project_id: project2.id, name: 'Task6', description: 'Something', due_date: '2018-07-02')
# Task.create!(project_id: project3.id, name: 'Task7', description: 'Something', due_date: '2018-08-30')
# Task.create!(project_id: project3.id, assignee_id: user2.id, name: 'Task8', description: 'Something', due_date: '2018-09-12')
# Task.create!(project_id: project4.id, name: 'Task9', description: 'Something', due_date: '2019-02-11')
# Task.create!(project_id: project4.id, name: 'Task10', description: 'Something', due_date: '2019-02-20')
# Task.create!(project_id: project5.id, assignee_id: user2.id, name: 'Task11', description: 'Something', due_date: '2018-10-11')
# Task.create!(project_id: project6.id, assignee_id: user1.id, name: 'Task12', description: 'Something', due_date: '2018-12-20')
# Task.create!(assignee_id: user1.id, name: 'Task13', description: 'Something', due_date: '2018-11-02')
# Task.create!(assignee_id: user1.id, name: 'Task14', description: 'Something', due_date: '2018-08-12')
