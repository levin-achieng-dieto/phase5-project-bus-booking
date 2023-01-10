class DriversController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :rescue_from_not_found_record
    rescue_from ActiveRecord::RecordInvalid, with:  :rescue_from_invalid_record
    before_action :authorize, only: [:me]

    def index
        render json: Driver.all, status: :ok
    end

    def show
        driver = Driver.find_by(id: params[:id])
        render json: driver, status: :ok
    end

    def create
        driver = Driver.create!(driver_params)
        render json: driver, status: :created
    end

    def update
        driver = Driver.find_by(id: params[:id])
        driver.update!(driver_params)
        render json: driver, status: :updated
    end

    def destroy
        driver = Driver.find(params[:id])
        driver.destroy
        head :no_content
    end

    def me
        driver = Driver.find(session[:driver_id])
        if driver
            render json: driver
        else
            render json: {error: "user not authorized"}, status: :unauthorized
        end
    end

    def signup
        driver = Driver.create(driver_params)
        if driver.valid?
            session[:driver_id] = driver.id
            render json: driver, status: :created
        else
            render json: {errors: driver.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def login
        driver = Driver.find_by(username: params[:username])
        if driver&.authenticate(params[:password])
            session[:driver_id] = driver.id
            render json: driver, status: :created
        else
            render json: {error: "Invalid username or password"}, status: :unauthorized
        end
    end

    def logout
        session.delete :driver_id
        head :no_content
    end


    private

    def authorize
        render json: {error: "user not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    def driver_params
        params.permit(:username, :email, :phone_number, :password, :password_confirmation)
    end

    def rescue_from_not_found_record
        render json: {error: "Driver not found"}, status: :not_found 
    end

    def rescue_from_invalid_record(e)
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity 
    end
end
