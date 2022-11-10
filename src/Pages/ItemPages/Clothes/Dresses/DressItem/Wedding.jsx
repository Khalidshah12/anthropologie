import React from 'react'
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getwedding} from '../../../Redux/AppReducer/action';

// import {wedding} from '../../../../db';
function Wedding() {
  const dispatch = useDispatch();

  const {data} = useSelector((state)=>{
    return{
      data : state.AppReducer.data,
    }
  })

  console.log(data)

  useEffect(()=>{
    dispatch(getwedding);
  },[])


  return (
    <div>
      
    </div>
  )
}

export default Wedding
