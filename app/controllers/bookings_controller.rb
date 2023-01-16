class BookingsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :rescue_from_not_found_record
    rescue_from ActiveRecord::RecordInvalid, with:  :rescue_from_invalid_record

    def index
        render json: Booking.all, status: :ok
    end

    def create
        bookings = Booking.create!(booking_params)
        render json: bookings, status: :created
    end

    def update
        booking = Booking.find_by(id: params[:id])
        booking.update!(booking_params)
        render json: booking, status: :updated
    end

    def destroy 
        booking = Booking.find(params[:id])
        booking.destroy
        head :no_content
    end

    def show
        booking = Booking.find_by(id: params[:id])
        render json: booking, status: :ok 
    end

    private
    def booking_params
        params.permit(:name, :phonenumber, :busnumber, :from,:to, :seat, :cost)
    end

    def rescue_from_not_found_record
        render json: {error: "Booking not found"}, status: :not_found 
    end

    def rescue_from_invalid_record(e)
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity 
    end

    def driver
        @client ||= Client.find(params[:driver_id])
    end
end
