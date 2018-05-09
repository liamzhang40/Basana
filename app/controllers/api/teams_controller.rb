class Api::TeamsController < ApplicationController

  before_action :require_login

  def index
    @teams = current_user.teams
    render 'api/teams/index'
  end

  def create
    @team = Team.new(team_params)
    @emails = params[:emails]
    debugger
    if @team.save
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
