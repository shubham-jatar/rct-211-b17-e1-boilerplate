import axios from "axios";
import React from "react";
import {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
  getShoesFailure,
  getShoesRequest,
  getShoesSuccess,
} from "../../Redux/action";
import { store } from "../../Redux/store";
const Shoes = () => {
const dispatch=useDispatch()
// const shoes=useSelector((state)=>state.shoes)
const getData=()=>{
dispatch(getShoesRequest())
axios.get('Shoes/').then((r)=>dispatch(getShoesSuccess(r.data))).catch((r)=>dispatch(getShoesFailure(r)))
// axios.get('shoes').then(res=>dispatch(getShoesSuccess(res.data))).catch((res)=>dispatch(getShoesFailure()))
}
  useEffect(()=>{
    getData()
  },[])

  return <div><h1>Shoes Product</h1></div>;
};

export default Shoes;
