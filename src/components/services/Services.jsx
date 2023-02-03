import React from "react";
import { useState } from "react";
import "./services.css";

const Services = () => {
    const [ToggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return(
        <section className="services section" id="services">
            <h2 className="section__title">Meus Serviços</h2>
            <span className="section__subtitle">O que eu ofereço</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                            Desenvolvedor <br /> Front-End
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>Ver mais<i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={ToggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">Desenvolvedor Front-End</h3>
                            <p className="services__modal-description">Serviço com mais de 3 anos de eperiência. Provendo um trabalho de qualidade para meus clientes e empresas.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Eu desenvolvi uma inteface de usuário</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Desenvolvedor Web</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Eu criei elementos de intereção com UX</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Eu posiciono o brand da sua empresa</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design and mockups of products for companies</p>
                                </li>
                            </ul>
                            </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">
                            UI/UX <br /> Design
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>Ver mais<i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={ToggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">UI/UX Designer</h3>
                            <p className="services__modal-description">Serviço com mais de 3 anos de eperiência. Provendo um trabalho de qualidade para meus clientes e empresas.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Eu desenvolvi uma inteface de usuário</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Desenvolvedor Web</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Eu criei elementos de intereção com UX</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Eu posiciono o brand da sua empresa</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design and mockups of products for companies</p>
                                </li>
                            </ul>
                            </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">
                            Visual <br /> Designer
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>Ver mais<i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={ToggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">Visual Designer</h3>
                            <p className="services__modal-description">Serviço com mais de 3 anos de eperiência. Provendo um trabalho de qualidade para meus clientes e empresas.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Eu desenvolvi uma inteface de usuário</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Desenvolvedor Web</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Eu criei elementos de intereção com UX</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Eu posiciono o brand da sua empresa</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design and mockups of products for companies</p>
                                </li>
                            </ul>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services