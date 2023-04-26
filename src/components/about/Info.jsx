import React from "react";

const Info = () => {
    return(
        <div className="about__info grid">
            <div className="about__box">
                <i class="bx bx-award about__icon" ></i>
                <h3 className="about__title">experiência</h3>
                <span className="about__subtitle">3 Anos de trabalho</span>
            </div>

            <div className="about__box">
                <i class='bx bxs-coin-stack about__icon'></i>
                <h3 className="about__title">Projetos</h3>
                <span className="about__subtitle">+ 5</span>
            </div>

            <div className="about__box">
                <i class='bx bxs-castle about__icon'></i>
                <h3 className="about__title">Completados</h3>
                <span className="about__subtitle">3 + Projetos</span>
            </div>
        </div>
    )
}

export default Info