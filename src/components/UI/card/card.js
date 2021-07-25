import React from 'react';
import s from './card.module.css';

/**
* @author
* @function Card
**/

const card = (props) => {
  return(
    <div className={s.card}>
        {props.children}
    </div>
   );

 };

export default card