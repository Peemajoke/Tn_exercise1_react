import React, { useCallback, useState } from 'react'
import Header from '../components/Header'
import EnterName from '../components/EnterName'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { Button } from 'antd';

export default function Results() {

    function resetName(){
        const temp = {
          type: 'DONT_CARE',
          value: ''
        }
        return temp
      }
    
      const dispatch = useDispatch()
      const changeNameToDefault = useCallback(() => dispatch(resetName())) //don't add [dispatch] cuz it will not update variable playerName
  return (
    <div>
      <Header />
      <Link href="/">
      <Button type="primary" style={{ width: 200 }} onClick={changeNameToDefault}>To Home Page</Button>
      </Link>
    </div>  
  )
}
