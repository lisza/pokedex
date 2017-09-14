export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: 'api/pokemon'
  })
);

// Where does the id come from?
export const fetchSinglePokemon = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/pokemon/${id}`
  })
);
