json.pokemon @pokemon,
  :id,
  :name,
  :attack,
  :defense,
  :poke_type,
  :moves,
  :image_url

json.items @pokemon.items,
  :id,
  :pokemon_id,
  :name,
  :price,
  :happiness,
  :image_url
