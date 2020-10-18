
import shopActionTypes from './shop.types';

export const updateCollections =(colectionmap)=>({
    type:shopActionTypes.UPDATE_COLLECTIONS,
    payload:colectionmap
})