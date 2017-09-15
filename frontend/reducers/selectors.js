import values from 'lodash/values';

export const selectAllPokemon = (state) => (
  values(state.entities.pokemon)
);

// If poke exists, get poke's item_ids (an array of numbers) and map
// over them to return an array of actual item obejcts by getting
// entities.items[id] and pushing them into the new array (via map.)
export const selectPokeItems = ( state, poke ) => {
  if (poke) {
    return poke.item_ids.map(id => state.entities.items[id]);
    // this part can be done like above, now that I have
    // pokemon.item_ids created in my pokemonReducer.
  } else {
    return [];
  }
};

export const selectPokeItem = ( state, itemId ) => {
  return state.entities.items[itemId];
  // should return an array or just a single object?
};
