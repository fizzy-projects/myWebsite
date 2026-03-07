import type { SkillTagIndex, Competency } from "../../types/types";
import { SkillArray } from "../../types/types";

type tempCompetency = [skillname:string, SkillTagIndex[]]
const tempCompetencies: tempCompetency[] = [
    ["Time-Series Analysis",[1,2]],
    ["Geo-spatial Methods",[1,2]],
    ["Bayesian Statistics",[1,2]],
    ["Monte Carlo Markov Chain",[1,2]],
    ["Statistics",[1,2]],
    ["Hypothesis Testing",[1,2]],
    ["Machine Learning",[1,2]],
    ["Forecasting",[1,2]],
    ["Graph Theory",[1]],
    ["Operations Research",[1,2]],
    ["Cryptography",[1]],
    ["Convex Optimisation",[1]],
    ["Linear Programming",[1]],
    ["Python",[1,2,3]],
    ["SQL",[1,2,3]],
    ["Matlab",[1,2,3]],
    ["C++",[3]],
    ["R Programming",[1,2]],
    ["Data Visualisation",[2]],
    ["Databricks",[2]],
    ["PowerBI",[2]],
    ["Tableau",[2]],
    ["React",[3]],
    ["TypeScript",[3]],
    ["JavaScript",[3]],
    ["Node.JS",[3]],
    ["Flask",[3]],
    ["HTML",[3]],
    ["CSS",[3]],
    ["Supabase",[3]],
    ["Linux",[3]],
    ["GitHub",[3]],
    ["English",[4]],
    ["Malay",[4]],
    ["Arabic",[4]]
]

export const Competencies: Competency[] = tempCompetencies.map(x =>
    ({
        skill:x[0],
        tags:x[1].map(tagValue => SkillArray[tagValue])
    })
)