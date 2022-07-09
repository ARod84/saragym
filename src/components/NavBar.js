import React, { useState } from "react";
import '../styles/navbar.css';


const NavBar = () => {
    const [open, setOpen] = useState(false);
    
    const handleClick = () => {
        !open ? setOpen(true) : setOpen(false)
    }
    return (
    <>
    <div className="wrapperNavbar">
    <div className={`navInner ${open ? "open" : "close"}`}>
        <ul className="categorias">
            <li className="menuLink destacado">
                Rutinas
            </li>
            <li className="menuLink">
                Workshops
            </li>
            <li className="menuLink">
                Dietas
            </li>
            <li className="menuLink">
                Productos
            </li>
            <li className="menuLink">
                Eventos
            </li>
        </ul>
    </div>
    <div className={`navBar ${open ? "open" : ""}`}>
        <div className="navIcon" onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M400 224h-44l-26.12-53.25c-12.5-25.5-35.38-44.25-61.75-51L197 98.63C189.5 96.84 181.1 95.97 174.5 95.97c-20.88 0-41.33 6.81-58.26 19.78L76.5 146.3C68.31 152.5 64.01 162 64.01 171.6c0 17.11 13.67 32.02 32.02 32.02c6.808 0 13.67-2.158 19.47-6.616l39.63-30.38c5.92-4.488 13.01-6.787 19.53-6.787c2.017 0 3.981 .2196 5.841 .6623l14.62 4.25l-37.5 87.5C154.1 260.3 152.5 268.8 152.5 277.2c0 22.09 11.49 43.52 31.51 55.29l85 50.13l-27.5 87.75c-.9875 3.174-1.458 6.388-1.458 9.55c0 13.65 8.757 26.31 22.46 30.58C265.6 511.5 268.9 512 272 512c13.62 0 26.25-8.75 30.5-22.5l31.75-101c1.211-4.278 1.796-8.625 1.796-12.93c0-16.57-8.661-32.51-23.55-41.44l-61.13-36.12l31.25-78.38l20.25 41.5C310.9 277.4 327.9 288 345.1 288H400c17.62 0 32-14.38 32-32C432 238.3 417.6 224 400 224zM288 96c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48S261.5 96 288 96zM129.8 317.5L114.9 352H48c-17.62 0-32 14.38-32 32s14.38 32 32 32h77.5c19.25 0 36.5-11.5 44-29.12l8.875-20.5l-10.75-6.25C150.4 349.9 137.6 334.8 129.8 317.5z"/>
            </svg>
        </div>
        <div className="navTitle">
            <span>SaraGym</span>
        </div>
    </div>
    </div>
    
    </>
    )
} 

export default NavBar