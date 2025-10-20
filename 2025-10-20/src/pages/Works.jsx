import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Works = () => {
    const location = useLocation();
    console.log(location);
    
  return (
    <div>Works
        <p>현재 페이지 : {location.pathname}</p>
        <Link to="/contact">Contact 페이지로 이동</Link>
    </div>
  )
}

export default Works