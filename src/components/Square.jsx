import React from 'react'
import { useState } from 'react'

const Square = ( {value,onSquareClick} ) => {

  return (
    <button className="w-20 h-20 border-2 border-gray-500 rounded-lg text-3xl font-bold text-gray-700 bg-gradient-to-br from-white to-gray-100 hover:from-gray-200 hover:to-white transition-all duration-200 ease-in-out shadow-sm" onClick={onSquareClick}> {value} </button>
  );
}

export default Square