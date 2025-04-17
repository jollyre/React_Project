import React from 'react'

const Navigator=()=>{
    return(
      <React.Fragment>
          <nav>
        <div className="logo">
        <img src="/img/nike_logo.jpg"  alt="" className='logo-img' />
      </div><ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul><button>login</button>
      </nav>
      </React.Fragment>
    );
};
export default Navigator;