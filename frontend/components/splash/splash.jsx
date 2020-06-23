import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component { 



  render() {
    return (
      <div>
        <Link to="/login">LOG IN</Link>
        <br/>
        <Link to="/signup">GET ALL THREE FOR $12.99/MONTH</Link>
        <br/>
        <Link to="/signup">or Subscribe to just Disney+ for $6.99/month or $69.99/year</Link>
      </div>
    )
   }
}

export default Splash; 