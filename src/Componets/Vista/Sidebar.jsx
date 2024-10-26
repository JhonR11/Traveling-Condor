import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaRoute,
    FaBus,
    FaMapMarkerAlt,
    FaStar,
} from "react-icons/fa";
import logoempresa from '../../Assets/LogoCode.png';
import Inicio from '../Pages/Inicio'
import Recomendacion from '../Pages/Recomendacion';
import PuntoInteres from '../Pages/PuntosIntere';
import RutasSiva from '../Pages/RutasSiva';
import Misruta from '../Pages/Misruta';
import {motion} from 'framer-motion';

const Sidebar = ({ onMenuItemClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path: <Inicio/>,
            name: <span className="menu-item-text">Inicio</span>,
            icon: <FaTh color="white"/>
        },
        {
            path: <motion.div initial={{ opacity:0.1, x:-30}} animate={{scale:1.0, opacity:1.0, x:0}} exit={{ opacity: 0 }}><Misruta /></motion.div>,
            name: <span className="menu-item-text">Mis Rutas</span>,
            icon: <FaRoute color="white"/>
        },
        {
            path: <motion.div initial={{ opacity:0.1, x:-30}} animate={{scale:1.0, opacity:1.0, x:0}} exit={{ opacity: 0 }}><RutasSiva/></motion.div>,
            name: <span className="menu-item-text">Siva</span>,
            icon: <FaBus color="white"/>
        },
        {
            path: <motion.div initial={{ opacity:0.1, x:-30}} animate={{scale:1.0, opacity:1.0, x:0}} exit={{ opacity: 0 }}><PuntoInteres/></motion.div>,
            name: <span className="menu-item-text">Puntos</span>,
            icon: <FaMapMarkerAlt color="white"/>
        },
        {
            path: <motion.div initial={{ opacity:0.1, x:-30}} animate={{scale:1.0, opacity:1.0, x:0}} exit={{ opacity: 0 }}><Recomendacion/></motion.div>,
            name: <span className="menu-item-text">Recomendacion</span>,
            icon: <FaStar color='white'/>
        }
    ];

    return (
        <div>
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar" >
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
                        <img className="codegear" src={logoempresa} alt="D:" />
                    </h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars color="White"onClick={toggle} />
                    </div>
                </div>

                {menuItem.map((item, index) => (
                    <div
                        key={index}
                        className="link"
                        exact activeclassName="active"
                        onClick={() => onMenuItemClick(item.path)}
                        style={{ cursor: 'pointer'  }}
                        
                    >
                        <div className="icon">{item.icon}</div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name} </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;



