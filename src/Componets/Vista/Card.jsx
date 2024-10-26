import React, { useState } from 'react';
import {Link} from 'react-router-dom';


const Card = (props) => {

    return (
        
            <div className='card w-80'>
                <div >
                    <h1 className='h1'>
                        {props.card}
                    </h1>
                </div>
                <div className="carditem">
                    <ul>
                        <li>
                            <Link prefetch={false} to=" " >
                                    <h2 className='cardtitulo'>
                                        {props.titulo}
                                    </h2>
                            </Link>
                        </li>
                    </ul>
                </div>           
            </div>
    );
};

export default Card;