import React from 'react';
import { Route, Link } from 'react-router-dom';
import ItemDetailContainer from '../items/item_detail_container';
import ItemDetail from '../items/item_detail';

class PokemonDetail extends React.Component {

  componentDidMount() {
    const id = this.props.match.params.pokemonId;
    this.props.requestSinglePokemon(id);
  }

  componentWillReceiveProps(newProps) {
    const oldId = this.props.match.params.pokemonId;
    const newId = newProps.match.params.pokemonId;
    if (oldId !== newId ) {
      this.props.requestSinglePokemon(newId);
    }
  }

  render() {
    const { pokemon, items } = this.props;

    if (!pokemon) return null;

    return(
      <section>
        <figure>
          <img src={pokemon.image_url} alt={pokemon.name} />
        </figure>
        <ul>
          <li>{pokemon.name}</li>
          <li>{pokemon.poke_type}</li>
          <li>{pokemon.attack}</li>
          <li>{pokemon.defense}</li>
          <li>{pokemon.moves}</li>
        </ul>
        <section>
          <ul>
            Items:
            {items.map(item =>

              <Link to={`/pokemon/${item.pokemon_id}/item/${item.id}`}>
                  <img src={item.image_url} width="70px"/>
              </Link>

            )}
          </ul>

          <Route
            path="/pokemon/:pokemonId/item/:itemId"
            component={ItemDetailContainer}
          />
        </section>
        <hr />
      </section>
    )
  }
}

export default PokemonDetail;
