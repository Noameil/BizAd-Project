import React from 'react';

export default function Title(props) {
  return (
    <>
      <div className='bg-dark text-white d-flex flex-column align-items-center py-3'>
        <h1>{props.mainTitle}</h1>
        <h2 className='fw-normal'>{props.subTitle}</h2>
      </div>
    </>
  )
}
