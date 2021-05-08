import {createSelector} from 'reselect';

const COLLECTION_ID_MAP ={
    cakes : 1,
    cupcake:2,
    pastries:3,
    swiss_roll:4,
    muffins:5,
    donuts:6,
    desserts:7
}

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
)

