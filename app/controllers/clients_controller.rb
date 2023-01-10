class ClientsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :rescue_from_not_found_record
    rescue_from ActiveRecord::RecordInvalid, with:  :rescue_from_invalid_record
    before_action :authorize, only: [:me]

    def index
        render json: Client.all, status: :ok
    end

    def show
        client = Client.find_by(id: params[:id])
        render json: client, status: :ok
    end

    def create
        client = Client.create!(client_params)
        render json: client, status: :created
    end

    def update
        client = Client.find_by(id: params[:id])
        client.update!(admin_params)
        render json: client, status: :updated
    end

    def destroy
        client = Client.find(params[:id])
        client.destroy
        head :no_content
    end

    def me
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
        params.permit(:username, :email, :phone_number, :address, :password, :password_confirmation)
    end

    def rescue_from_not_found_record
        render json: {error: "Client not found"}, status: :not_found 
    end

    def rescue_from_invalid_record(e)
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity 
    end
end
