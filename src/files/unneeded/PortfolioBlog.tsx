import React, { useState, useEffect } from 'react';
import './PortfolioBlog.css';

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  tags: string[];
  rating: number;
  notes: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  impact: string;
  year: number;
}

const PortfolioBlog: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'portfolio' | 'blog'>('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);

  const bookBlog: BlogPost[] = [
    {
      id: 1,
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      date: '2024-01-15',
      category: 'Psychology & Decision Making',
      excerpt: 'Deep dive into cognitive biases and heuristics. Essential reading for understanding human reasoning patterns in data analysis.',
      tags: ['behavioral-economics', 'psychology', 'decision-theory'],
      rating: 5,
      notes: 'The concepts of System 1 and System 2 thinking revolutionized how I approach statistical inference and model interpretation.'
    },
    {
      id: 2,
      title: 'The Signal and the Noise',
      author: 'Nate Silver',
      date: '2024-02-10',
      category: 'Statistics & Forecasting',
      excerpt: 'Explores the art and science of prediction. Critical analysis of where statistical models succeed and fail.',
      tags: ['statistics', 'forecasting', 'prediction'],
      rating: 5,
      notes: 'Brilliantly connects theoretical statistics to real-world applications in politics, sports, and economics.'
    },
    {
      id: 3,
      title: 'Gödel, Escher, Bach',
      author: 'Douglas Hofstadter',
      date: '2024-03-05',
      category: 'Mathematics & Philosophy',
      excerpt: 'Explores self-reference, recursion, and the nature of intelligence through art, music, and mathematics.',
      tags: ['mathematics', 'philosophy', 'ai'],
      rating: 5,
      notes: 'Profound meditation on patterns and meaning. Changed how I think about modeling and abstraction.'
    },
    {
      id: 4,
      title: 'A Mathematician\'s Apology',
      author: 'G.H. Hardy',
      date: '2024-04-02',
      category: 'Mathematics & Philosophy',
      excerpt: 'A beautifully written defense of pure mathematics and the mathematician\'s pursuit of truth over utility.',
      tags: ['mathematics', 'philosophy', 'pure-math'],
      rating: 4,
      notes: 'Inspiring reflection on why mathematics matters beyond its applications. Reminds us of the beauty in abstract thought.'
    },
    {
      id: 5,
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      date: '2024-05-11',
      category: 'History & Data',
      excerpt: 'A sweeping narrative history of humankind through the lens of data and major transitions.',
      tags: ['history', 'data', 'society'],
      rating: 4,
      notes: 'Great for understanding how data and patterns shape human civilization and collective narratives.'
    },
    {
      id: 6,
      title: 'Algorithms to Live By',
      author: 'Brian Christian & Tom Griffiths',
      date: '2024-06-08',
      category: 'Computer Science & Life',
      excerpt: 'Apply computer science algorithms and complexity theory to everyday decision-making and life challenges.',
      tags: ['algorithms', 'optimization', 'decision-making'],
      rating: 5,
      notes: 'Bridges the gap between pure algorithms and practical life. Essential for any analyst or developer.'
    }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Predictive Analytics Dashboard',
      description: 'Built an interactive dashboard for time-series forecasting with ARIMA and Prophet models. Real-time data ingestion from multiple sources with statistical significance testing.',
      technologies: ['Python', 'React', 'Node.js', 'PostgreSQL', 'TensorFlow'],
      impact: 'Reduced forecasting error by 23%, enabling better resource allocation',
      year: 2023
    },
    {
      id: 2,
      title: 'Bayesian A/B Testing Framework',
      description: 'Developed a statistical framework for sequential A/B testing using Bayesian inference. Includes stopping rules, power analysis, and prior specification tools.',
      technologies: ['Python', 'R', 'Shiny', 'Stan', 'FastAPI'],
      impact: 'Decreased experiment duration by 40% while maintaining statistical rigor',
      year: 2023
    },
    {
      id: 3,
      title: 'Data Pipeline & ETL System',
      description: 'Architected end-to-end data pipeline with robust error handling, data validation, and automated quality checks. Processes 50M+ records daily.',
      technologies: ['Python', 'Apache Airflow', 'PostgreSQL', 'AWS S3', 'Docker'],
      impact: 'Improved data quality from 87% to 99.2% with 60% reduction in manual intervention',
      year: 2022
    },
    {
      id: 4,
      title: 'Causal Inference Analysis Tool',
      description: 'Built statistical toolkit for causal inference using propensity score matching, difference-in-differences, and instrumental variables methods.',
      technologies: ['Python', 'statsmodels', 'scikit-learn', 'matplotlib'],
      impact: 'Enabled identification of causal effects in observational data for policy decisions',
      year: 2022
    },
    {
      id: 5,
      title: 'Interactive Data Visualization Suite',
      description: 'Created reusable React components for complex statistical visualizations including confidence intervals, distributions, and uncertainty quantification.',
      technologies: ['React', 'D3.js', 'TypeScript', 'Three.js'],
      impact: 'Improved stakeholder understanding of statistical concepts through interactive visualizations',
      year: 2023
    }
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let filtered = bookBlog;
    
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory) {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);

  const categories = [...new Set(bookBlog.map(post => post.category))];

  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="header" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <nav className="nav-container">
          <div className="logo">
            <span className="logo-text">∑</span>
            <span className="logo-label">Analytics</span>
          </div>
          <ul className="nav-links">
            <li>
              <button
                className={`nav-button ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => setActiveTab('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={`nav-button ${activeTab === 'portfolio' ? 'active' : ''}`}
                onClick={() => setActiveTab('portfolio')}
              >
                Portfolio
              </button>
            </li>
            <li>
              <button
                className={`nav-button ${activeTab === 'blog' ? 'active' : ''}`}
                onClick={() => setActiveTab('blog')}
              >
                Book Blog
              </button>
            </li>
          </ul>
          <div className="social-icons">
            <a href="#github" className="icon-link" title="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#linkedin" className="icon-link" title="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>
            <a href="#email" className="icon-link" title="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </div>
        </nav>
      </header>

      {/* Content */}
      <main className="main-content">
        {/* HOME TAB */}
        {activeTab === 'home' && (
          <section className="home-section">
            <div className="hero">
              <div className="hero-content">
                <h1 className="hero-title">
                  <span className="title-line-1">Mathematics</span>
                  <span className="title-line-2">Statistics</span>
                  <span className="title-line-3">Data</span>
                </h1>
                <p className="hero-subtitle">
                  Mathematician and full-stack developer. Passionate about extracting insights from data, building robust systems, and bridging the gap between theory and practice.
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <div className="stat-number">5+</div>
                    <div className="stat-label">Years Analytics</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">12</div>
                    <div className="stat-label">Major Projects</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">Books Read</div>
                  </div>
                </div>
                <div className="hero-cta">
                  <button className="cta-primary" onClick={() => setActiveTab('portfolio')}>
                    View Portfolio
                  </button>
                  <button className="cta-secondary" onClick={() => setActiveTab('blog')}>
                    Read My Thoughts
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
                  <p>React, TypeScript, Node.js, Python, SQL, and cloud deployment on AWS/GCP.</p>
                </div>
                <div className="expertise-card">
                  <div className="expertise-icon">∇</div>
                  <h3>Machine Learning</h3>
                  <p>Supervised and unsupervised learning, deep learning, model evaluation, and production deployment.</p>
                </div>
              </div>
            </section>
          </section>
        )}

        {/* PORTFOLIO TAB */}
        {activeTab === 'portfolio' && (
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
        )}

        {/* BLOG TAB */}
        {activeTab === 'blog' && (
          <section className="blog-section">
            <div className="section-header">
              <h2 className="section-title">Book Blog</h2>
              <p className="section-subtitle">
                Notes on books that shaped my thinking about mathematics, statistics, data, and life.
              </p>
            </div>

            <div className="blog-controls">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search books..."
                  className="search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="search-icon">🔍</span>
              </div>
              <div className="category-filter">
                <button
                  className={`category-button ${selectedCategory === null ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(null)}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="blog-posts">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => (
                  <article key={post.id} className="blog-post" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="post-header">
                      <h3 className="post-title">{post.title}</h3>
                      <div className="post-meta">
                        <span className="post-author">by {post.author}</span>
                        <span className="post-date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                      </div>
                    </div>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <div className="post-notes">
                      <strong>My Notes:</strong> {post.notes}
                    </div>
                    <div className="post-footer">
                      <div className="post-rating">
                        <span className="rating-stars">{'★'.repeat(post.rating)}{'☆'.repeat(5 - post.rating)}</span>
                      </div>
                      <div className="post-tags">
                        {post.tags.map((tag) => (
                          <span key={tag} className="tag">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="no-results">
                  <p>No books match your search criteria.</p>
                </div>
              )}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            Crafted with precision and curiosity. Always learning, always questioning.
          </p>
          <div className="footer-links">
            <a href="#" className="footer-link">GitHub</a>
            <a href="#" className="footer-link">LinkedIn</a>
            <a href="#" className="footer-link">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioBlog;
