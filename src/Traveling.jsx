import React, { useState } from 'react';
import Inicio from './Componets/Pages/Inicio';
import Navbarn from './Componets/Vista/Navbarn';
import Sidebar from './Componets/Vista/Sidebar';
import Choosers from '../src/Componets/Vista/Choosers';
import './index.css';
import './Traveling.scss';
import Mapa from '../src/Componets/Map/Mapa';
import {motion} from 'framer-motion';

const Traveling = () => {
    const [chosen, setChosen] = useState(null);

    const handleMenuItemClick = (name) => {
        setChosen(name);
    };


    const isInicio = chosen && chosen.type === Inicio;




    return (
        <div className="tabla w-auto h-100 overflow-auto">
            <motion.div initial={{ opacity:0.1, x:-50}} pathOffset={{line:1}} transition={{duration: 2 }} animate={{scale:1.0, opacity:1.0, x:0}}><Sidebar onMenuItemClick={handleMenuItemClick} /></motion.div>
            <div className='contenedor w-100 h-100 overflow-auto'>
            <motion.div initial={{ opacity:0.1, y:-50}}  transition={{ duration: 2 }} animate={{scale:1.0, opacity:1.0, y:0}}> <Navbarn /></motion.div>
                <motion.div initial={{ scale:1.2,opacity:0.1, y:+30}}  transition={{ duration: 0.5 }} animate={{scale:1.0, opacity:1.0, y:0}} className='contenedorprincipal w-100 h-100 overflow-auto'>
                    <motion.div initial={{ opacity:0.1, x:-30}} animate={{scale:1.0, opacity:1.0, x:0}} exit={{ opacity: 0 }}  className={`contenedorseleccion overflow-auto ${isInicio ? 'inicio' : ''}`}>
                        <Choosers chosen={chosen} />
                    </motion.div>
                    <motion.div initial={{ opacity:0.1, z:-30}} animate={{scale:1.0, opacity:1.0, z:0}}className='contenedormapa w-100 h-100 overflow-auto'>
                        <Mapa/>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Traveling;