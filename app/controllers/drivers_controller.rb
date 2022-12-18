class DriversController < ApplicationController
    before_action :authorize, only: [:show]

    def show
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
end
