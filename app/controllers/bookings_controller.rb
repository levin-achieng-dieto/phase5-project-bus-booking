class BookingsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :rescue_from_record_not_found

    def index
        render json: Booking.all, status: :ok
    end

    def show
        booking = Booking.find(params[:id])
        render json: booking, status: :ok
    end

    def create
        booking = Booking.create!(booking_params)
        render json: booking, status: :created
    end

    def update
        booking = Booking.find(params[:id])
        booking.update!(booking_params)
        render json: booking, status: :updated
    end

    def destroy
        booking = Booking.find(params[:id])
        booking.destroy
        render json: booking, status: :not_found
    end

    private

    def booking_params
        params.permit(:from, :to, :date, :no_of_passangers)
    end

    def rescue_from_record_not_found
        render json: {errors: "Booking not found"}, status: :not_found
    end
end
