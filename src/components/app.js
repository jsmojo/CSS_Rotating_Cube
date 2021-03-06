import React from 'react'
import Cube from '../components/cube/cube'
import pageStyles from './app.scss'
import logo from '../images/svg/logo.svg';

const App = () => (
  <div className={pageStyles.App}>
  <div className={pageStyles.header}>
    <img src={logo} className={pageStyles.logo} alt="logo" />
  </div>
  <div className={pageStyles.content}>
    
    <Cube/>
  </div>
</div> 
)


export default App