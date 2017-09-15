import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import { selectPokeItem } from '../../reducers/selectors';

// We're destructuring { match } out of ownProps, which is
// mapStateToProps' second parameter. This way we get the item's Id.
const mapStateToProps = (state, { match }) => ({
  item: selectPokeItem(state, parseInt(match.params.itemId))
});

export default connect(
  mapStateToProps,
)(ItemDetail);
