import React from "react"
import "./skills.css"
import Frontend from "./Frontend"
import Backend from "./Backend"
import Design from "./Design"

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Minhas Skills</h2>
            <span className="section__subtitle">Meu nível Tecnico</span>

            <div className="skills__container container grid">
                <Frontend />
                <Backend />
                <Design />
            </div>
        </section>
    )
}

export default Skills