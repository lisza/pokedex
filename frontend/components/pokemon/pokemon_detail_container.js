import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';
import { selectPokeItems } from '../../reducers/selectors';

// could pull out id by using ownProps as a second argument in
// mapStateToProps... but I don't know how that works really.
const mapStateToProps = (state) => {
  const pokemon = state.entities.pokemon[state.ui.pokeDisplay];

  return {
    pokemon, //How to do it without ui/pokeDisplay?
    items: selectPokeItems(state, pokemon)
    // wrote the selector, returns an array of item obejcts belonging
    // to that poke
    // loading: state.ui.loading.detailLoading //left out for now...
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
