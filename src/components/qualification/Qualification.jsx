import React, { useState } from "react";
import "./qualification.css"

const Qualification = () => {
    const [ToggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return(
        <section className="qualification section">
            <h2 className="section__title">Minhas Qualificações</h2>
            <span className="section__subtitle">Minha jornada pessoal</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={
                        ToggleState === 1 
                        ? "qualification__button qualification__active button--flex" 
                        : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Educação
                    </div>

                    <div className={
                        ToggleState === 2 
                        ? "qualification__button qualification__active button--flex" 
                        : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={
                        ToggleState === 1
                            ? "qualification__content qualification__content-active" 
                            : "qualification__content "
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Desenvolvedor Front-End</h3>
                                <span className="qualification__subtitle">
                                    UnderShip
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    10/2021 - 08/2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                                <div></div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>   
                                <div>
                                    <h3 className="qualification__title">Software</h3>
                                    <span className="qualification__subtitle">
                                        IESB - Faculdade
                                    </span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        2022 - Atual
                                    </div>
                                </div>                     
                        </div>
                    </div>

                    <div className={
                        ToggleState === 2
                            ? "qualification__content qualification__content-active" 
                            : "qualification__content "
                        }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Front-End</h3>
                                <span className="qualification__subtitle">
                                    UnderShip
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    10/2021 - 08/2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                                <div></div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>   
                                <div>
                                    <h3 className="qualification__title">Software</h3>
                                    <span className="qualification__subtitle">
                                        IESB - Faculdade
                                    </span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        2022 - Atual
                                    </div>
                                </div>                     
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification

// className={
//     ToggleState === 2
//         ? "qualification__content qualification__content-active" 
//         : "qualification__content"
//     }