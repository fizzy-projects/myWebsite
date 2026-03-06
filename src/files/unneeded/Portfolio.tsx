import { projects } from "./data/portfolio";

export const Portfolio: React.FC = ()=>{
    return(
        <section className="portfolio-section">
            <div className="section-header">
                <h2 className="section-title">Portfolio</h2>
                <p className="section-subtitle">
                Selection of projects showcasing data analysis, statistical modeling, and full-stack development.
                </p>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                <div key={project.id} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="project-header">
                        <h3 className="project-title">{project.title}</h3>
                        <span className="project-year">{project.year}</span>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-impact">
                        <span className="impact-label">Impact:</span>
                        <span className="impact-text">{project.impact}</span>
                    </div>
                    <div className="tech-tags">
                        {project.technologies.map((tech) => (
                            <span key={tech} className="tech-tag">
                            {tech}
                            </span>
                        ))}
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}