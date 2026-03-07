import type { Project } from "../../types/types";

export const projects: Project[] = [
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
