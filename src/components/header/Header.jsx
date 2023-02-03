import React, {useState} from "react";
import { NavLink } from "react-router-dom";

import st from "./Header.module.css";

const Header = () => {
    const [onBurguer, setOnBurguer] = useState(false)
    const handleBurguer = ()=>{
        setOnBurguer(!onBurguer)
    }
    const closeBurguer = ()=>{
        setOnBurguer(false)
    }
    
    return(
        <>
            <header className={st.header}>
                <div className={st.header_titleDiv}><p className={st.header_title}>Dolce Vita</p></div>
                <div className={st.header_burguerBtn} onClick={handleBurguer}><BurguerMenu/></div>
            </header>
            <nav className={onBurguer == false? st.dropdownNav : st.dropdownNav+" "+st.dropdownNav__On}>
                <div className={st.dropdownNav_divContainer}>
                    <div className={st.dropdownNav_link} onClick={closeBurguer}><NavLink to={"/"}>Home</NavLink></div>
                    <div className={st.dropdownNav_link} onClick={closeBurguer}><NavLink to={"/Gallerys"}>Gallery</NavLink></div>
                    <div className={st.dropdownNav_link} onClick={closeBurguer}><NavLink to={"/Contact"}>Contact</NavLink></div>
                    <div className={st.dropdownNav_link} onClick={closeBurguer}><NavLink to={"/Footer"}>Footer</NavLink></div>
                    <div className={st.dropdownNav_link} onClick={closeBurguer}><NavLink to={"/About"}>About</NavLink></div>
                </div>
            </nav>
            <div className={st.cackeDecoration}><img src="./src/assets/cackeDecoration.png"/></div>
        </>
    )
};

const BurguerMenu = ()=>{
    return(
         <svg fill="#FFFFFF" height="150px" width="150px" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid"><path d="M24,3H8C5.2,3,3,5.2,3,8v16c0,2.8,2.2,5,5,5h16c2.8,0,5-2.2,5-5V8C29,5.2,26.8,3,24,3z M22,21H10c-0.6,0-1-0.4-1-1 s0.4-1,1-1h12c0.6,0,1,0.4,1,1S22.6,21,22,21z M22,17H10c-0.6,0-1-0.4-1-1s0.4-1,1-1h12c0.6,0,1,0.4,1,1S22.6,17,22,17z M22,13H10 c-0.6,0-1-0.4-1-1s0.4-1,1-1h12c0.6,0,1,0.4,1,1S22.6,13,22,13z"/></svg>
    )
}

export default Header;
