// import type React from "react"
// import type { WebsiteHeaderProps } from "./typesBlogManager"
// import { useRef, type RefObject } from "react"
import type { HomeProps } from "../../types/types";                                                                                                                                                                                                                                                                                                                                                                                                                                                   

export const Home: React.FC<HomeProps> = ({onTabChange}) =>
{
    const goToSection = (id:string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }

    return(
        <section className="home-section">
            <div className="hero">
                <div className="hero-content">
                <h1 className="hero-title">
                    <span className="title-line-1">Mathematician</span>
                    <span className="title-line-2">Developer</span>
                    <span className="title-line-3">Humanity</span>
                </h1>
                <p className="hero-subtitle">
                    {/* Mathematician & developer. */}
                    Building ethical technology. 
                    Providing rigorous analytics and technical support with a commitment to knowledge & justice. 
                    {/* Mathematician and developer building ethical technology for human flourishing. I combine rigorous analytical thinking with a commitment to responsible innovation. */}
                    {/* Mathematician and full-stack developer. Passionate about extracting insights from data, building robust systems, and bridging the gap between theory and practice. */}
                </p>
                <div className="hero-stats">
                    <div className="stat-item">
                        <div className="stat-number">2+</div>
                        <div className="stat-label">Years Analytics</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">4+</div>
                        <div className="stat-label">Years <br/>Societal Work<br />& Leadership</div>
                    </div>
                    {/* <div className="stat-item">
                        <div className="stat-number">1+</div>
                        <div className="stat-label">Books Read</div>
                    </div> */}
                </div>
                <div className="hero-cta">
                    <button className="cta-primary" id='cta-primary' onClick={() => goToSection('cta-primary')}>
                        Competencies
                    </button>
                    <button className="cta-secondary" onClick={() => onTabChange('cv')}>
                        View Experience
                    </button>
                </div>
                </div>
                <div className="hero-visual">
                <div className="geometric-shape shape-1"></div>
                <div className="geometric-shape shape-2"></div>
                <div className="geometric-shape shape-3"></div>
                </div>
            </div>

            <section className="expertise-section">
                <h2 className="section-title">Core Expertise</h2>
                <div className="expertise-grid">
                    {/* Math Symbols λ,∑,π,∫,∇,P,𝒇 */}
                    <div className="expertise-card">
                        <div className="expertise-icon">π</div>
                        <h3>Statistics & Data Analytics</h3>
                        <p>Time-series forecasts, geospatial methods, Bayesian, hypothesis testing, SQL.</p>
                        <p>For informed decision making</p>
                    </div>
                    <div className="expertise-card">
                        <div className="expertise-icon">∇</div>
                        <h3>Algorithms & Optimization</h3>
                        <p>Machine learning, numerical optimization, graph networks, operations research.</p>
                        <p>For efficient algorithm solutions</p>
                    </div>
                    <div className="expertise-card">
                        <div className="expertise-icon">∑</div>
                        <h3>Full-Stack Development</h3>
                        <p>React, TypeScript, JavaScript, Flask, HTML, CSS, Python, SQL, Database, Linux, C++.</p>
                        <p>For building platforms and products</p>
                    </div>
                    <div className="expertise-card">
                        <div className="expertise-icon">λ</div>
                        <h3>Data Engineering (learning)</h3>
                        <p>Pipeline architecture, ETL, database design, and scalable data infrastructure.</p>
                        <p>For building robust networks</p>
                    </div>
                        <div className="expertise-card">
                        <div className="expertise-icon">∫</div>
                        <h3>Other Interests</h3>
                        <p>Islamic Knowledge, Astronomy, History, Arabic Language, Running.</p>
                    </div>

                    {/* <div>
                        <button className="cta-secondary" onClick={() => onTabChange('portfolio')}>
                            View All Competencies
                        </button>    
                    </div> */}
                    {/* <button className="cta-secondary" onClick={() => onTabChange('portfolio')}>
                        View All Competencies
                    </button> */}

                </div>

                {/* <div className="expertise-grid">
                    <div className="expertise-card">
                        <div className="expertise-icon">∑</div>
                        <h3>Statistical Modeling</h3>
                        <p>Bayesian inference, frequentist methods, causal inference, time-series analysis, and hypothesis testing.</p>
                    </div>
                    <div className="expertise-card">
                        <div className="expertise-icon">∫</div>
                        <h3>Data Engineering</h3>
                        <p>Pipeline architecture, ETL systems, database design, and scalable data infrastructure.</p>
                    </div>
                    <div className="expertise-card">
                        <div className="expertise-icon">π</div>
                        <h3>Full-Stack Development</h3>
                        <p>React, TypeScript, JavaScript, Node.js, Python, SQL, and cloud deployment on AWS/GCP.</p>
                    </div>
                    <div className="expertise-card">
                        <div className="expertise-icon">∇</div>
                        <h3>Machine Learning</h3>
                        <p>Supervised and unsupervised learning, deep learning, model evaluation, and production deployment.</p>
                    </div>
                </div> */}

            </section>
        </section>
    )
}