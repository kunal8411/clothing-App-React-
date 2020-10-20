import React from 'react';
import {Route} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors'
import CollectionPage from '../collection/collection.component'
import CollectionsOverview from '../../components/collections-overview/collections-overview.components' 
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.action'
import {connect} from 'react-redux'


class ShopPage extends React.Component{

    componentDidMount(){
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();

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

const mapStateToProps = createStructuredSelector({
    icCollectionFetching: selectIsCollectionFetching
})

const mapDispatchTOProps = dispatch =>({
    fetchCollectionsStartAsync:()=> dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchTOProps)(ShopPage);
