import React from 'react'
import { NavLink } from 'react-router-dom';
import './Card.css';

function Card(props) {
    return (
        <div className='card__Box' id={props.type === "Payments" ? "pay__Box" : "trans__Box"}>
            <div className='card__Upper'>
                <div className='cardBox__Left'>
                    {
                        props.type === "Payments" ? <i class="bi bi-cash"></i> : <i class="bi bi-credit-card-fill"></i>
                    }
                </div>
                <div className='cardBox__Right'>
                    <span className='count__Right'>{props.count}</span>
                    <p className='title__Right'>{props.type === "Payments" ? "All Payments" : "All Transactions"}</p>
                </div>
            </div>
            <div className='card__Footer'>
                <div className='cardFooter__Link'>
                    <NavLink to={props.type === 'Payments' ? '/portal_dashboard/payments_history' : '/portal_dashboard/main__'}>
                        <div>
                            View All
                        </div>
                        <div>
                            <i class="bi bi-arrow-right-circle-fill"></i>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Card