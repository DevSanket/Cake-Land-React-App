import React from 'react';
import CollectionPreview from '../Collection-Preview/Collection-Preview';
import './collection-overview.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../Redux/shop/shop.selector';

const CollectionOverview = ({ collections }) => {
    console.log(collections);
    return (
        <div className="collections-overview">
            {
                 collections.map(({id,...otherCollectionProps}) => (
                    <CollectionPreview key={id}{...otherCollectionProps}/>
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);