import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import MainCont from '../Price/MainCont'
import Main from '../Journal/Mainn'
import Array from './Array'
import Man from '../jokeApp/Man'
import Mc from "../Recipy/Mc"
import Memain from "../memeApp/Memain"
import Portfolio from '../Portfolio/Portfolio'



const root = createRoot(document.getElementById("root"))
root.render(
  <>
    {/* <MainCont /> */}
    {/* <Main /> */}
    {/* <Array /> */}
    {/* <Man /> */}
    {/* <Mc /> */}
    {/* <Memain /> */}
    <Portfolio />
  </>
)

