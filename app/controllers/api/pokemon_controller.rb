class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    # render json: @pokemon
  end

  def show
    @pokemon = Pokemon.find(params[:id])
  end

  private

  def pokemon_params
    # params here
  end
end
