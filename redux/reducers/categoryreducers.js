export const bsaorthocarereducer =(state={category:[]},action) =>{

    switch (action.type) {
        case 'ALL_CATEGORY_REQUEST':
            return {
                loading:true,
                category:[]
            }
            
            case 'ALL_CATEGORY_SUCCESS':
                return {
                    loading:false,
                    category:action.payload
                }
        default:
            return state;
    }
}

export const janusproducts =(state={products:[]},action) =>{

    switch (action.type) {
        case 'ALL_PRODUCTS_REQUEST':
            return {
                loading:true,
                products:[]
            }
            
            case 'ALL_PRODUCTS_SUCCESS':
                return {
                    loading:false,
                    products:action.payload,
                }
    
        default:
            return state;
    }


}


export const categorywithid =(state={cat:[]},action) =>{

    switch (action.type) {
        case 'ALL_CAT_REQUEST':
            return {
                loading:true,
                cat:[]
            }
            
            case 'ALL_CAT_SUCCESS':
                return {
                    loading:false,
                    cat:action.payload,
                }
    
        default:
            return state;
    }


}