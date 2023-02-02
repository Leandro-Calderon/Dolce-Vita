import React from 'react';
import { NavLink } from 'react-router-dom';
import ct from './Gallerys.module.css';

const imageP =
    'https://imgs.search.brave.com/HM5d3vgA4LIjDri8B-JXhiUcPHVeA6DRpto0AF9oM5g/rs:fit:870:1156:1/g:ce/aHR0cHM6Ly93d3cu/d2VkZGluZy12ZW51/ZXMuY28udWsvc2l0/ZXMvZGVmYXVsdC9m/aWxlcy9QYXN0ZWwt/Qmx1ZS1XZWRkaW5n/LVRoZW1lLUJldmVy/bHlzQmFrZXJ5Lmpw/Zw';

const Gallerys = () => {
    return (
        <>
            <div className={ct.container}>
                <div className={ct.container__tarts}>
                    <div className={ct.tarts}>
                        <p className={ct.tarts__title}>Tarta</p>
                        <img className={ct.tarts__img} src={imageP} alt="logo-page" loading="lazy" />

                        <div className={ct.tarts__option}>
                            <span className={ct.tartsOption__price}>15$</span>
                            <NavLink to="/Gallerys/:id" className={ct.tartsOption__link}>
                                <button className={ct.tartsOption__link__btn}>Ver...</button>
                            </NavLink>
                        </div>
                    </div>

                    <div className={ct.tarts}>
                        <p className={ct.tarts__title}>Tarta</p>
                        <img className={ct.tarts__img} src={imageP} alt="logo-page" loading="lazy" />

                        <div className={ct.tarts__option}>
                            <span className={ct.tartsOption__price}>15$</span>
                            <NavLink to="/Gallerys/:id" className={ct.tartsOption__link}>
                                <button className={ct.tartsOption__link__btn}>Ver...</button>
                            </NavLink>
                        </div>
                    </div>

                    <div className={ct.tarts}>
                        <p className={ct.tarts__title}>Tarta</p>
                        <img className={ct.tarts__img} src={imageP} alt="logo-page" loading="lazy" />

                        <div className={ct.tarts__option}>
                            <span className={ct.tartsOption__price}>15$</span>
                            <NavLink to="/Gallerys/:id" className={ct.tartsOption__link}>
                                <button className={ct.tartsOption__link__btn}>Ver...</button>
                            </NavLink>
                        </div>
                    </div>

                    <div className={ct.tarts}>
                        <p className={ct.tarts__title}>Tarta</p>
                        <img className={ct.tarts__img} src={imageP} alt="logo-page" loading="lazy" />

                        <div className={ct.tarts__option}>
                            <span className={ct.tartsOption__price}>15$</span>
                            <NavLink to="/Gallerys/:id" className={ct.tartsOption__link}>
                                <button className={ct.tartsOption__link__btn}>Ver...</button>
                            </NavLink>
                        </div>
                    </div>

                    <div className={ct.tarts}>
                        <p className={ct.tarts__title}>Tarta</p>
                        <img className={ct.tarts__img} src={imageP} alt="logo-page" loading="lazy" />

                        <div className={ct.tarts__option}>
                            <span className={ct.tartsOption__price}>15$</span>
                            <NavLink to="/Gallerys/:id" className={ct.tartsOption__link}>
                                <button className={ct.tartsOption__link__btn}>Ver...</button>
                            </NavLink>
                        </div>
                    </div>

                    <div className={ct.tarts}>
                        <p className={ct.tarts__title}>Tarta</p>
                        <img className={ct.tarts__img} src={imageP} alt="logo-page" loading="lazy" />

                        <div className={ct.tarts__option}>
                            <span className={ct.tartsOption__price}>15$</span>
                            <NavLink to="/Gallerys/:id" className={ct.tartsOption__link}>
                                <button className={ct.tartsOption__link__btn}>Ver...</button>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className={ct.loadingProduct}>
                    <button className={ct.loadingProduct__btn}>Ver mas...</button>
                </div>
            </div>
        </>
    );
};

export default Gallerys;
