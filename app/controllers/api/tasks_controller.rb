class Api::TasksController < ApplicationController

  before_action :require_login

  def index
    if task_params[:project_id]
      @tasks = Project.find(task_params[:project_id]).tasks
    else
      @tasks = User.find(task_params[:assignee_id]).tasks
    end
    render 'api/tasks/index'
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      render 'api/tasks/show'
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def show
    @task = Task.find(params[:id])
    render 'api/tasks/show'
  end

  def update
    @task = Task.find(params[:id])
    if @task.update(task_params)
      render 'api/tasks/show'
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    task = Task.find(params[:id])
    task.destroy!
    render json: {}
  end

  def like_create
    task_like = TaskLike.new(liker_id: current_user.id, task_id: params[:id])
    if task_like.save
      @task = Task.find(params[:id])
      render 'api/tasks/show'
    else
      render json: @task_like.errors.full_messages, status: 422
    end
  end

  def like_delete
    task_like = current_user.task_likes.find_by(task_id: params[:id])
    task_like.destroy!
    @task = Task.find(params[:id])
    render 'api/tasks/show'
  end

  private

  def task_params
    params.require(:task).permit(
      :project_id,
      :assignee_id,
      :name,
      :description,
      :completion,
      :privacy,
      :due_date
    )
  end
end
