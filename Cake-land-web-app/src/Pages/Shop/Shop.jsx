import {React,Component} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionOverview from '../../Components/collection-overview/collection-overview';
import CollectionPage from '../Collection/Collection';
import { convertCollectionsSnapshotToMap, firestore } from '../../Firebase/firebase.util';
import { updateCollections } from '../../Redux/shop/shop.actions';
// import { SHOP_DATA } from '../../Redux/shop/ShopData';


class ShopPage extends Component {
    state = {  }
    unsubscribeFromSnapshot = null;
    componentDidUpdate(){
        const { updateCollections} = this.props;
        const collectionRef= firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);  
        })
    }
    render() { 
        const { match } = this.props;
        return ( 
            <div className="shop-page">
                {/* <CollectionOverview /> */}
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                {/* Nested Routes  */}
                <Route path={`${match.path}/:categoryId`} component={CollectionPage}/>
            </div>
         )
    }
}
 

const mapDispatchToProps = dispatch => ({
    updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null,mapDispatchToProps)(ShopPage);