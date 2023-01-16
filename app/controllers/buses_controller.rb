class BusesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :rescue_from_not_found_record
rescue_from ActiveRecord::RecordInvalid, with:  :rescue_from_invalid_record

    def index
        render json: Bus.all, status: :ok
    end

    def create
        bus = driver.buses.create!(bus_params)
        render json: bus, status: :created
    end

    def update
        bus = Bus.find_by(id: params[:id])
        bus.update!(bus_params)
        render json: bus, status: :updated
    end

    def destroy 
        bus = Bus.find(params[:id])
        bus.destroy
        head :no_content
    end

    def show
        bus = Bus.find_by(id: params[:id])
        render json: bus, status: :ok 
    end

    private
    def bus_params
        params.permit(:number_plate, :fleet_no,:image,:route_id)
    end

    def rescue_from_not_found_record
        render json: {error: "Bus not found"}, status: :not_found 
    end

    def rescue_from_invalid_record(e)
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity 
    end

    def driver
        @driver ||= Driver.find(params[:driver_id])
    end
end
