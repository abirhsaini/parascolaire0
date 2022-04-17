import React from 'react';
import "../style/Allclucb.css"

const Cart = (props) => {
    console.log(`../images/${props.image}`)
    return (
        
        <div className='card1'>
          <a href="/description" description={props.name}>
            <div class="" >

                <img class="card-img-top" className='card2' src={require(`../images/${props.image}`)} alt="Card image cap" />
                <div class="card-body" className='cardindo'>
                    <h5 class="card-title">{props.name}</h5>

                </div>
            </div>
            </a>
        </div>
    );
};

export default Cart;