import React from 'react';


const InputForm = (props, name, type, value, onChange, placeHolder) => {
    return <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeHolder={placeHolder} />
};