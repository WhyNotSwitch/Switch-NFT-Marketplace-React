import React from "react";

function Button({className, ...rest}) {
  return <button  {...rest} className={`btn ${className}`} type="button"></button>;
}

export default Button;
