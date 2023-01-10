class RoutesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :rescue_from_not_found_record
    rescue_from ActiveRecord::RecordInvalid, with:  :rescue_from_invalid_record

    def index
        routes = Route.all
        render json: routes, status: :ok
    end

    def show
        routes = Route.find(params[:id])
        render json: routes, status: :ok
    end

    def create
        routes = Route.create!(routes_params)
        render json: routes, status: :created
    end

    def update
        routes = Route.find_by(id: params[:id])
        routes.update!(routes_params)
        render json: routes, status: :updated
    end

    def destroy 
        routes = Route.find(params[:id])
        routes.destroy
        head :no_content
    end


    private
    def routes_params
        params.permit(:from, :to, :price)
    end

    def rescue_from_not_found_record
        render json: {error: "Route not found"}, status: :not_found 
    end

    def rescue_from_invalid_record(e)
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity 
    end

end
