import merge from 'lodash/merge';
import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON:
    const items = {};
    // iterate over items and set each item object's key to that item's
    // key, so that we won't have different outer and inner Ids. Because
    // that will mess things up later.
    action.payload.items.forEach(item => {
      items[item.id] = item;
    })
    // return merge({}, state, items);
    return items;
    // Eventually I wanna merge the items to the old state, but right
    // now I'm not defining it to do that way in another place...

    default:
      return state;
  }
}

export default itemsReducer;
