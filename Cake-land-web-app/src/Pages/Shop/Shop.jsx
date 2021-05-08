import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionOverview from '../../Components/collection-overview/collection-overview';
import { selectCollections } from '../../Redux/shop/shop.selector';
import CollectionPage from '../Collection/Collection';
// import { SHOP_DATA } from '../../Redux/shop/ShopData';


const ShopPage = ({match}) => (
            <div className="shop-page">
                {/* <CollectionOverview /> */}
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                {/* Nested Routes  */}
                <Route path={`${match.path}/:categoryId`} component={CollectionPage}/>
            </div>
         );
 

const mapStateToProps = createStructuredSelector({
    collections : selectCollections
})
export default connect(mapStateToProps)(ShopPage);