import React from "react";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/euvitech/" className="home__social-icon" target="_blank"
            rel="noopener noreferrer">
                <i class="uil uil-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/euvitech/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <i class="uil uil-linkedin-alt"></i>
            </a>

            <a href="https://github.com/euvitech" className="home__social-icon" target="_blank"
            rel="noopener noreferrer">
                <i class="uil uil-github-alt"></i>
            </a>

            <a href="" className="home__social-icon" target="_blank"
            rel="noopener noreferrer">
                <i class="uil uil-document-layout-left"></i>
            </a>
        </div>
    )
}

export default Social