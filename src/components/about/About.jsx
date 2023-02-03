import React from 'react';
import st from './About.module.css';


const About = (props) => {

    return(
        <section className={st.section}>
            <img className={st.section_principalImg} src='./src/assets/cocineraTitulos.png'/>
            <div className={st.section_divContent}>
                <h2 className={st.divContent_h2}>Sobre nosotros</h2>
                <p className={st.divContent_p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id laborum similique a ipsum nisi eaque nemo molestias dolor perspiciatis corrupti porro impedit aliquid, distinctio quisquam sint nobis obcaecati blanditiis.</p>
                <div className={st.divSubContent}>
                    <p className={st.divSubContent_p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id laborum similique a ipsum nisi eaque nemo molestias dolor perspiciatis corrupti porro is.</p>
                    <div className={st.divSubContent_img}><img src='./src/assets/porcion de torta.png'/></div>
                </div>
            </div>
        </section>
    )

}

export default About;