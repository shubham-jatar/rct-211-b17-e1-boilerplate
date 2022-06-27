//Create ActionCreator functions here
import * as type from './actionTypes'



 export const getShoesRequest=(payload)=>{
    return{type:type.GET_SHOES_REQUEST}
 }

 export const getShoesSuccess =(payload)=>{
    return{type:type.GET_SHOES_SUCCESS}
 }

 export const getShoesFailure=(payload)=>{
    return{type:type.GET_SHOES_FAILURE}
 }