import React, {useState} from 'react';
import axios from "axios";
import { useEffect } from 'react/cjs/react.development';
import useAxios from './compo/useAxios';
import Header from './compo/Header';


const App = () => {
  const news = useAxios();

  return (
    <Header />
  );
}

export default App;
