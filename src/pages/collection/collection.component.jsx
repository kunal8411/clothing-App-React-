import React from 'react';
import {connect} from 'react-redux'
// import CollectionItem from '../../components/collectionn-item/collectionn-item.component';
import  {selectCollection} from '../../redux/shop/shop.selectors'
import './collection.styles.scss';


//collection -> will give us array of collection name which we are passing through url as a collectionId
const CollectionPage=({collection})=>(
    <div className='collection-page'>
        <h2>COLLECTION PAGE</h2>

    </div>
);

//ownPros=> all the props that we are getting on our CollectioPage component
const mapStateToProps = (state, ownProps)=>({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);