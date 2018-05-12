class Api::ProjectsController < ApplicationController

  before_action :require_login
  def index
  end

  def create
    @project = Project.new(project_params)

    if @project.save!
      render 'api/projects/show'
    else
      render json: @project.erros.full_messages, status: 422
    end
  end

  def show
    @project = Project.find(params[:id])
    render 'api/projects/show'
  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      render 'api/projects/show'
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = Project.find(params[:id])
  end

  private

  def project_params
    params.require(:project).permit(
      :creator_id,
      :team_id,
      :name,
      :description,
      :privacy
    )
  end

end
