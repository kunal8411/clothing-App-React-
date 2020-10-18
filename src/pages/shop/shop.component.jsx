import React from 'react';
import {Route} from 'react-router-dom';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import CollectionPage from '../collection/collection.component'
import CollectionsOverview from '../../components/collections-overview/collections-overview.components' 
import {updateCollections} from '../../redux/shop/shop.action'
import {connect} from 'react-redux'


class ShopPage extends React.Component{
    unsubscribeFromSnapshot = null ; 
    componentDidMount(){

        // destructure the update collection action from mapdispatchtoprops method
        const {updateCollections} = this.props;
        //take out collection reference object 
        const collectionRef = firestore.collection('collections')
        //whenever code gets update or code gets run for first time, this snapshot will send us
        //array with all collection snapshot object's
        collectionRef.onSnapshot(async snapshot => {

            //this function will convert array into object, and pass the data from firetore to our app
            const collectionMap =convertCollectionsSnapshotToMap(snapshot)
            //collectionmap gets an array with key as title and value as other items like id,items
            updateCollections(collectionMap)
        });


    }

    render(){
        const {match} = this.props;
        return(
            <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} /> 
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>

        )
    }
}


const mapDispatchTOProps = dispatch =>({
    updateCollections: (collectionMap) =>
     dispatch(updateCollections(collectionMap)) 
});

export default connect(null, mapDispatchTOProps)(ShopPage);
