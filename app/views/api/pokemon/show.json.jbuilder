json.pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type, :moves
  json.image_url asset_path(@pokemon.image_url)
end


json.items @pokemon.items,
  :id,
  :pokemon_id,
  :name,
  :price,
  :happiness,
  :image_url
