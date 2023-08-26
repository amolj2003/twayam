"use client"
import styles from './login.css';
import { signIn,signOut,useSession } from 'next-auth/react';
import React from 'react';
import { NextResponse, NextRequest } from 'next/server';

import { useCookies } from 'react-cookie';

import { useRouter } from 'next/router';
import { useState, useEffect } from "react";

  const setCookieHandler = () => {
    setCookie('new-user', true, {
      path: '/',
    });

    router.replace("/");
  };
  const removeCookieHandler = () => {
      removeCookie('new-user');
    
      router.replace("/");
  };  
const login = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
      
    useEffect(() => {

      }, [cookies]);

    const session =useSession();
    console.log(session);


    if(session.status === "loading"){
        return <p> Loading....</p>
        
    }
    if(session.status ==="authenticated"){
          return <div>
          <button onClick={()=>
            {signOut("github");
            setCookieHandler()}}>
            LOGOUT
          </button>
          <h1> Hello !{session.data.user.name} You are succefully Logged in</h1>
          <h1>{console.log('Cookies saved is _xsrf', cookies)}</h1>
        </div>
    }

    if(session.status==="unauthenticated"){
     return <div>
      <button onClick={()=> 
        {signIn("github");
        {setCookieHandler()}}}> 
        login with github
      </button>
    </div>
    }


  return (
    <div>
       <button onClick={()=>signIn("github")}> login with github </button>
    </div>
  )
}

export default login
