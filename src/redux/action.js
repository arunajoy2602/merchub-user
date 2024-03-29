import { IS_LOADING, IS_BTN_DISABLED,
    CATEGORIES_LOADED, PRODUCTS_LOADED, PRODUCTS_COUNTED,
    PRODUCTS_AVAILABILITY_LOADED, SPECIFIC_PRODUCT_FETCHED
} from "./actionTypes";




export const isBtnDisabled = (value) => ({
    type: IS_BTN_DISABLED,
    isBtnDisabled: value
});

export const isAppLoading = (value) => ({
    type: IS_LOADING,
    isLoading:value
});

export const categoriesFetch = (categories) => ({
    type : CATEGORIES_LOADED,
    categories
});

export const productsFetched = (products) =>({
    type : PRODUCTS_LOADED,
    products
})

export const productsCounted = (value) =>({
    type: PRODUCTS_COUNTED,
    value
})

export const productsAvailabilityLoaded = (value)=>({
    type : PRODUCTS_AVAILABILITY_LOADED,
    value
})


export const productFetchedById = (value)=>({
    type : SPECIFIC_PRODUCT_FETCHED,
    value
})