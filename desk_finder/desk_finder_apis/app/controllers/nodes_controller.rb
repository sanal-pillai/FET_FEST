class NodesController < ApplicationController

  # GET /nodes
  # GET /nodes.json
  def index
    @floor_plan = Node.get_floor_plan

    respond_to do |format|
      format.json { render json: @floor_plan, status: :ok}
    end
  end

  # GET /nodes/1
  # GET /nodes/1.json
  def show
    nodes = Node.get_coordinates(params[:id])
    @floor_plan = { 'floor_plan': nodes }
    respond_to do |format|
      if !nodes.blank?
        format.json { render json: @floor_plan, status: :ok }
      else
        format.json { render json: @floor_plan, status: :not_found }
      end
    end
  end

  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def node_params
      params.require(:node).permit(:name)
    end

end
