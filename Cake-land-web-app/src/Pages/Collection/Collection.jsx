import React from 'react';
import './Collection.scss';
import CollectionItem from '../../Components/Collection-item/Collection-item';
import { connect } from 'react-redux';
import { selectCollection } from '../../Redux/shop/shop.selector';



const CollectionPage = ({collection}) => {
    console.log(collection);
    return ( 
        <div className="collection">
            <h2>Collection PAGE</h2>
        </div>
     );
}


const mapStateToProps = (state,ownProps) => {
    console.log(ownProps);
    return({
        collection : selectCollection(ownProps.match.params.categoryId)(state)
    })
} 
 
export default connect(mapStateToProps)(CollectionPage);