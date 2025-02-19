import React from 'react';
import { Link } from 'react-router-dom';

const Pro = () => {
  return <div>pro
    <a href="/hello">hello anchor</a>
     <div>
     <Link to={"/hello"}>vaish</Link>
     </div>
    <Link to={"/hi"}>anu</Link>
  </div>;
};

export default Pro;
