import {createSelector} from 'reselect'

//map the string with id
const COLLECTION_ID_MAP={
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}

const selectShop = state=> state.shop 

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
) ;  

//see the difference here and above method , name with 's and without 's
export const selectCollection = collectionURLParam =>
    createSelector(
        [selectCollections],
        collections =>
        collections.find(
            collection=>collection.id===COLLECTION_ID_MAP[collectionURLParam]
        )
    )