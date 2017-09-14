import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return this.props.requestAllPokemon();
  }

  render() {
    const pokemonItems = this.props.pokemon.map((poke) => (
      <PokemonIndexItem key={poke.id} pokemon={poke} />
    ));

    return(
      <div>
        <ul>
          { pokemonItems }
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
