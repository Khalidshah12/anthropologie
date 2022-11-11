import React from 'react'
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {get_casual_success} from '../../Redux/AppReducer/action';
import { casual } from "../../db";
import { useEffect } from 'react';

function SingleItemPage() {
    const {id} = useParams();
    const dispatch =useDispatch();

    const {singlepage}  =useSelector((state)=>{
        return{
            singlepage : state.AppReducer.singlepage
        }
    } );

    console.log(singlepage);
  return (
    <div>
      
    </div>
  )
}

export default SingleItemPage
