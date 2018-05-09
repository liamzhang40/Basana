class Api::TeamsController < ApplicationController

  before_action :require_login

  def index
    @teams = current_user.teams
    render 'api/teams/index'
  end

  def create
    debugger
    @team = Team.new(team_params)

    if @team.save
      invalid_emails = [];
      emails = params[:team][:emails].delete(' ').split(',')
      TeamMembership.create(team_id: @team.id, member_id: current_user.id)
      
      emails.each do |email|
        user = User.find_by(username: email)
        invalid_emails << email unless user
        TeamMembership.create(team_id: @team.id, member_id: user.id)
      end

      render 'api/teams/show'
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  def show
    @team = current_user.teams.find(params[:id])
    render 'api/teams/show'
  end

  def update
    @team = current_user.teams.find(params[:id])
    if @team.update(team_params)
      render 'api/teams/show'
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  def destroy
    team = current_user.teams.find(params[:id])
    unless team.destroy
      render json: ['Idk how you get here but something is wrong'], status: 404
    end
  end

  private

  def team_params
    params.require(:team).permit(:name)
  end

end
