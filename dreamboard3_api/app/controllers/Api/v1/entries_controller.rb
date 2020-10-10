class Api::V1::EntriesController < ApplicationController

    before_action :set_entry, only: [:show, :update, :destroy]

    # GET /entries
    def index
        @entries = Entry.where(board_id: params[:board_id])
  
      render json: @entries
    end
  
    # GET /entries/1
    def show
       @entry = find_by(id: params[:id])
    end
  
    # POST /comments
    def create
        if params[:board_id]
            @board = Board.find_by(board_id: params[:board_id])
            @entry = @board.entries.build(entry_params)
            if @entry.save
                render json: EntrySerializer.new(@entry).serialized_json, status: :ok
            else
                error_resp = {
                    error: @entry.errors.full_messages.to_sentence
                }
                render json: error_resp, status: :unprocessable_entity
            end
        end
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_entry
        @entry = Entry.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def entry_params
        params.require(:entry).permit(:item, :board_id)
      end
  end   