'use client';

import Loader from "./Loader/Loader"

export default function PageLoader() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000,
      backgroundColor: 'black'
    }}>
      <Loader />
    </div>
  )
  
}