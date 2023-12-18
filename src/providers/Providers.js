import React from 'react';
import { AuthContext } from '../contexts';
import {useState,userEffect} from 'react';

const Providers = ({childern}) => {
  return (
    <AuthContext.Provider>
      {childern}
    </AuthContext.Provider>
  )
}

export default Providers;
