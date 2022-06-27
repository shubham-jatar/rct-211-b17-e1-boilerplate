import * as type from './actionTypes'

const initialState = {
  shoes: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState,action) => {
  const {type,payload}=action;
  switch(type){
    case type.GET_SHOES_REQUEST:
      return{
        ...state,
        isLoading:true,
        isError:false,
      }
      case type.GET_SHOES_SUCCESS:
      return{
        ...state,
        shoes:payload,
        isLoading:false,
        isError:false,
      }
      case type.GET_SHOES_FAILURE:
      return{
        ...state,
        shoes:payload,
        isLoading:false,
        isError:true,
      }
  }
  return state;
};
