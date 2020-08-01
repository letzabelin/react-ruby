# frozen_string_literal: true

class PagesController < ApplicationController
  def index; end

  def episodes
    @episodes = Course.first.episodes

    render json: { data: @episodes }
  end
end
