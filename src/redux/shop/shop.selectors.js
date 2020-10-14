import {createSelector} from 'reselect'




const selectShop = state=> state.shop 

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
) ;  

//see the difference here and above method , name with 's and without 's
// export const selectCollection = collectionURLParam =>
//     createSelector( 
//         [selectCollections],
//         collections =>collections[collectionURLParam]
        
// )

export const selectCollection = collectionUrlParam =>
  createSelector([selectCollections], collections => {
    return collections.find(collection => {
      return collection.routeName === collectionUrlParam
    })
  });