import React from 'react'
import Header from '../header/header'

/**
* @author
* @function 

**/

const layout = (props) => {
  return(
    <div>
        <Header />
        {props.children}
    </div>
   )

 }

export default layout;