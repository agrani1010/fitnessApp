import React from "react";
import Checkbox from './Checkbox';

function Rewards(props) {
    const {points} = props
  return (
<div className="card text-center" style={{width:"60%",margin:"10px"}}>
<div className="card-header" >
<h3>Your reward points are waiting for you!!</h3>
</div>
<div className="card-body" ><img src="images/coin.png" alt=""/>
<h5 className="card-title">Points Earned</h5>
<h4 className="points">{points}</h4>

<p>Claim your free doctor consultation in just 500 points.</p>
<p>Redeem your points against medication purchase.</p>
</div>
</div>
  );

}

export default Rewards;