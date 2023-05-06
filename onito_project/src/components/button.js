import React from 'react';

const Button = (props) => {
  return (
    <button style={{fontSize:'20px',color:'orange',marginLeft: '80pc'}} onClick={props.onClick}>{props.label}</button>
  );
}

export default Button;
