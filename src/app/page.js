import Image from 'next/image'
import styles from './page.module.css'
import React from "react";

export default function Home() {
  return (
    <div style={{textAlign: "center"
                ,padding: "35px",
                 fontSize: '45px'}}>

      <p className='hola'>
              This is the first page.
        <br />
              Click on the button below.
      </p>
      <br/>
      <a href="/login">
          <button style={{ fontSize:"45px"}} >
             CLICK HERE TO LOGIN 
          </button>
       </a>
    </div>
  )
}
