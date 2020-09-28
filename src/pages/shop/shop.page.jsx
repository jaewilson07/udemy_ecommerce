import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

//import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';

class ShopPage extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <Link to="/shop">
          <h1>ShopPage</h1>
        </Link>
        <Route
          exact
          path={`${match.url}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.url}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
