class AdminsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :rescue_from_not_found_record
    rescue_from ActiveRecord::RecordInvalid, with:  :rescue_from_invalid_record
    before_action :authorize, only: [:me]

    def index
        render json: Admin.all, status: :ok
    end

    def show
        admin = Admin.find_by(id: params[:id])
        render json: admin, status: :ok
    end

    def create
        admin = Admin.create!(admin_params)
        render json: admin, status: :created
    end

    def update
        admin = Admin.find_by(id: params[:id])
        admin.update!(admin_params)
        render json: admin, status: :updated
    end

    def destroy
        admin = Admin.find(params[:id])
        admin.destroy
        head :no_content
    end

    def me
        admin = Admin.find(session[:admin_id])
        if admin
            render json: admin
        else
            render json: {error: "user not authorized"}, status: :unauthorized
        end
    end

    def signup
        admin = Admin.create(admin_params)
        if admin.valid?
            session[:admin_id] = admin.id
            render json: admin, status: :created
        else
            render json: {errors: admin.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def login
        admin = Admin.find_by(username: params[:username])
        if admin&.authenticate(params[:password])
            session[:admin_id] = admin.id
            render json: admin, status: :created
        else
            render json: {error: "Invalid username or password"}, status: :unauthorized
        end
    end

    def logout
        session.delete :user_id
        head :no_content
    end


    private

    def authorize
        render json: {error: "user not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    def admin_params
        params.permit(:username, :email, :phone_number, :password, :password_confirmation)
    end

    def rescue_from_not_found_record
        render json: {error: "Admin not found"}, status: :not_found 
    end

    def rescue_from_invalid_record(e)
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity 
    end
end
