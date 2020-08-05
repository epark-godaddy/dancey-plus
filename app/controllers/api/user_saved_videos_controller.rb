class Api::UserSavedVideosController < ApplicationController
  before_action :set_user_saved_video, only: [:show, :edit, :update, :destroy]

  # GET /user_saved_videos
  # GET /user_saved_videos.json
  def index
    @user_saved_videos = UserSavedVideo.all
  end

  # GET /user_saved_videos/1
  # GET /user_saved_videos/1.json
  def show
  end

  # GET /user_saved_videos/new
  def new
    @user_saved_video = UserSavedVideo.new
  end

  # GET /user_saved_videos/1/edit
  def edit
  end

  # POST /user_saved_videos
  # POST /user_saved_videos.json
  def create
    @user_saved_video = UserSavedVideo.new(user_saved_video_params)
    @user_saved_video.user_id = current_user.id

    respond_to do |format|
      if @user_saved_video.save
        format.html { redirect_to @user_saved_video, notice: 'User saved video was successfully created.' }
        format.json { render :show, status: :created }
      else
        format.html { render :new }
        format.json { render json: @user_saved_video.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /user_saved_videos/1
  # PATCH/PUT /user_saved_videos/1.json
  def update
    respond_to do |format|
      if @user_saved_video.update(user_saved_video_params)
        format.html { redirect_to @user_saved_video, notice: 'User saved video was successfully updated.' }
        format.json { render :show, status: :ok, location: @user_saved_video }
      else
        format.html { render :edit }
        format.json { render json: @user_saved_video.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /user_saved_videos/1
  # DELETE /user_saved_videos/1.json
  def destroy
    @user_saved_video.destroy
    respond_to do |format|
      format.html { redirect_to user_saved_videos_url, notice: 'User saved video was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_saved_video
      @user_saved_video = UserSavedVideo.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_saved_video_params
      params.require(:user_saved_video).permit(:user_id, :video_id)
    end
end
