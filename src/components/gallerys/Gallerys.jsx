import React from 'react';
import { NavLink } from 'react-router-dom';
import ct from './Gallerys.module.css';

// ESTA ES UNA BASE DE DATOS FALSAS
import imageP from './DataBaseGallerys';

function Gallerys() {
    // console.log(imageP)

    const loandingProduct = () => {
        console.log('loand...');
    }

    return (
        
        <div className={ct.container__tart}>

            <div className={ct.container__tarts}>

                {
                imageP.map((items) => {

                    return (
                        <div className={ct.tarts} key={items.id}>

                            <p className={ct.tarts__title}> {items.title} </p>
                            <img className={ct.tarts__img} src={items.url} alt="logo-page" loading="lazy" />

                            <div className={ct.tarts__option}>
                                <span className={ct.tartsOption__price}> {items.price}$ </span>
                                <NavLink to="/Gallerys/:id" className={ct.tartsOption__link}>
                                    <button className={ct.tartsOption__link__btn}>Ver...</button>
                                </NavLink>
                            </div>

                        </div>
                    );
                })
                }

            </div>

            <div className={ct.loadingProduct}>
                <button className={ct.loadingProduct__btn} onClick={loandingProduct}>Ver mas...</button>
            </div>

        </div>
    );
}

export default Gallerys;
