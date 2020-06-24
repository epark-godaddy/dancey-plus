class Api::VideoTagsController < ApplicationController
  before_action :set_video_tag, only: [:show, :edit, :update, :destroy]

  # GET /video_tags
  # GET /video_tags.json
  def index
    @video_tags = VideoTag.all
  end

  # GET /video_tags/1
  # GET /video_tags/1.json
  def show
  end

  # GET /video_tags/new
  def new
    @video_tag = VideoTag.new
  end

  # GET /video_tags/1/edit
  def edit
  end

  # POST /video_tags
  # POST /video_tags.json
  def create
    @video_tag = VideoTag.new(video_tag_params)

    respond_to do |format|
      if @video_tag.save
        format.html { redirect_to @video_tag, notice: 'Video tag was successfully created.' }
        format.json { render :show, status: :created, location: @video_tag }
      else
        format.html { render :new }
        format.json { render json: @video_tag.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /video_tags/1
  # PATCH/PUT /video_tags/1.json
  def update
    respond_to do |format|
      if @video_tag.update(video_tag_params)
        format.html { redirect_to @video_tag, notice: 'Video tag was successfully updated.' }
        format.json { render :show, status: :ok, location: @video_tag }
      else
        format.html { render :edit }
        format.json { render json: @video_tag.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /video_tags/1
  # DELETE /video_tags/1.json
  def destroy
    @video_tag.destroy
    respond_to do |format|
      format.html { redirect_to video_tags_url, notice: 'Video tag was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_video_tag
      @video_tag = VideoTag.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def video_tag_params
      params.require(:video_tag).permit(:video_id, :tag_id)
    end
end
