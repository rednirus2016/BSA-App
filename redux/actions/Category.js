import axios from 'axios'


export const allorthocare = ()=> async(dispatch) =>{
    
    dispatch({type:'ALL_CATEGORY_REQUEST'})
    try {
        const {data} =  await axios.get('https://bsagroup.redniruscare.com/api/orthocare/');
        
        dispatch({type:'ALL_CATEGORY_SUCCESS',payload:data})
    } catch (error) {
        dispatch({type:'ALL_CATEGORY_ERROR',payload:error})
    } 
}

// export const getallproduct =  (title) => async(dispatch)=>{
    
//     dispatch({type:'ALL_PRODUCTS_REQUEST'})
//     try {
//         const {data} =  await axios.get(`https://janusbiotech.co.in/api/productcategories/${title.id}`);
    
//         dispatch({type:'ALL_PRODUCTS_SUCCESS',payload:data})
//     } catch (error) {
//         dispatch({type:'ALL_PRODUCTS_ERROR',payload:error})
//     }
// }

// export const categorywithid =  (id) => async(dispatch)=>{
 
//     dispatch({type:'ALL_CAT_REQUEST'})
//     try {
//         const {data} =  await axios.post('https://janusbiotech.co.in/api/productcategories',{category_id:id});
    
//         dispatch({type:'ALL_CAT_SUCCESS',payload:data})
//     } catch (error) {
//         dispatch({type:'ALL_CAT_ERROR',payload:error})
//     }
// }

