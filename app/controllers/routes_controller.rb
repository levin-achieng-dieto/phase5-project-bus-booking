class RoutesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :rescue_from_not_found_record
rescue_from ActiveRecord::RecordInvalid, with:  :rescue_from_invalid_record

    def index
        render json: Route.all, status: :ok
    end

    def create
        route = Route.create!(route_params)
        render json: route, status: :created
    end

    def update
        route = Route.find_by(id: params[:id])
        route.update!(route_params)
        render json: route, status: :updated
    end

    def destroy 
        route = Route.find(params[:id])
        route.destroy
        head :no_content
    end

    def show
        route = Route.find_by(id: params[:id])
        render json: route, status: :ok 
    end

    private
    def route_params
        params.permit(:from, :to, :image, :busnumber, :date, :time, :cost, :admin_id)
    end

    def rescue_from_not_found_record
        render json: {error: "Route not found"}, status: :not_found 
    end

    def rescue_from_invalid_record(e)
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity 
    end

    def admin
        @admin ||= Admin.find(params[:admin_id])
    end
end
