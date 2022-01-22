import React from 'react'

function HelloWorld() {
  let hello = 'Hello World!'

  function umaLetraPorLinha() {
    return (
      <>
        <div>{hello[0]}</div>
        <div>{hello[1]}</div>
        <div>{hello[2]}</div>
        <div>{hello[3]}</div>
        <div>{hello[4]}</div>
        <div>{hello[5]}</div>
        <div>
          <br />
        </div>
        <div>{hello[6]}</div>
        <div>{hello[7]}</div>
        <div>{hello[8]}</div>
        <div>{hello[9]}</div>
        <div>{hello[10]}</div>
        <div>{hello[11]}</div>
      </>
    )
  }

  return (
    <>
      <div className='hello1'>{hello}</div>
      <hr />
      <div className='hello2'>{hello.toUpperCase()}</div>
      <hr />
      <div className='hello3'>{hello.toLowerCase()}</div>
      <hr />
      <div className='hello4'>{hello.replace(' ', '')}</div>
      <hr />
      <div className='hello5'>{hello.split('').reverse()}</div>
      <hr />
      <div className='hello6'>{hello.split(' ').reverse()}</div>
      <hr />
      <div className='hello7'>{hello.split('').sort()}</div>
      <hr />
      <div className='hello8'>{umaLetraPorLinha()}</div>
      <hr />
      <div className='hello9'>{`${hello[0]} ${hello[1]} ${hello[2]} ${hello[3]} ${hello[4]} ${hello[5]} ${hello[6]} ${hello[7]} ${hello[8]} ${hello[9]} ${hello[10]} ${hello[11]}`}</div>
      <hr />
      <div className='hello10'>Hello World!</div>
      <hr />
    </>
  )
}

export default HelloWorld
