class ClientsController < ApplicationController
    before_action :authorize, only: [:show]

    def show
        client = Client.find(session[:client_id])
        if client
            render json: client
        else
            render json: {error: "user not authorized"}, status: :unauthorized
        end
    end

    def signup
        client = Client.create(client_params)
        if client.valid?
            session[:client_id] = client.id
            render json: client, status: :created
        else
            render json: {errors: client.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def login
        client = Client.find_by(username: params[:username])
        if client&.authenticate(params[:password])
            session[:client_id] = client.id
            render json: client, status: :created
        else
            render json: {error: "Invalid username or password"}, status: :unauthorized
        end
    end

    def logout
        session.delete :client_id
        head :no_content
    end


    private

    def authorize
        render json: {error: "user not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    def client_params
        params.permit(:username, :email, :phone_number, :password, :password_confirmation)
    end
end
