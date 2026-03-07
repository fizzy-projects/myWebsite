import type { SecularEducation, ReligiousEducation } from "../../types/types"


export const SecularEducationData: SecularEducation[] = [
    {
        id: 1,
        institution: 'Commonwealth Secondary School',
        certificate: 'O-Level',
        status: 'Completed',
        startDate: 2010,
        endDate: 2013,
        achievements: [
            'Vice-Captain of the Cross Country team',
            'Student Councillor',
            'Represented the school in National Schools Cross Country Championships and National Inter-School Track and Field Championships'
        ],
        links: []
    },
    {
        id: 2,
        institution: 'Anglo-Chinese Junior College',
        certificate: 'A-Level',
        status: 'Completed',
        startDate: 2014,
        endDate: 2015,
        achievements: [
            "Represented the school in National Schools Cross Country Championships and National Inter-School Track and Field Championships"
        ],
        links: []
    },
    {
        id: 3,
        institution: 'National Technological University',
        certificate: "BSc (Hons)",
        title: "Degree in Mathematical Sciences (Applied Mathematics)",
        additionalTitle: "Additionally attained: Concentration in Computational Mathematics",
        status: 'Completed',
        startDate: 2018,
        endDate: 2022,
        achievements: [
            "Honours (Distinction) GPA: 4.36/5.00",
            "Teaching Assistant [PS0001 Introduction to Computational Thinking]",
            "FYP: data-driven Mixture Choice Models (Probabilistic Optimization)"
        ],
        societalWork: {
            society: 'NTU Muslim Society',
            committees: [
                {
                    title: "Honorary Auditor for Executive Committee for AY22/23",
                    achievements:[
                        "Taught and Guided the Executive Committee's Finance Officers in Finance and Auditing matters",
                        "Partnered with Nanyang Business School's Accounting and Assurance Club (NAAT) in settling Audit documents"
                    ]
                },
                {
                    title: "Executive Committee’s Finance Officer for AY21/22",
                    achievements:[
                        "Managed the finances of the society with its 13 constituent large teams",
                        "Achieved an upgrade to the competitive Tier 1 CCA status in the University",
                        "Sponsorship outreach and maintaining good relations with stakeholders",
                        "Upheld strict accounting and auditing of the society, ensuring rigorous financial integrity",
                        "Collaboration Projects with many other societies, clubs and external organisations",
                        "Team advisorship and also guided all finance heads of the constituent teams",
                        "Managed the finance process and largely involved in the NTU-wide Project on semester-long halal food delivery initiative MAKAN2 to provide more halal food options to the whole campus"
                    ]
                },
                {
                    title: "Programmes Officer for the adhoc Pulse 2021",
                    achievements:[
                        "Planned and executed various events relating to fitness and wellbeing"
                    ]
                },
                {
                    title: "Head of Logistics for the adhoc Yusra 2020",
                    achievements: [
                        "Ensured availability of resources and logistics on time"
                    ]
                }
            ],
            
        },
        links: [
            "Resume"
        ]
        
    },

]

export const ReligiousEducationData: ReligiousEducation[] = [
    {
        id:1,
        institution: 'Madrasah Tentera DiRaja, Singapore',
        certificate: 'Sijil Tamat Pengajian',
        status: 'Completed',
        startDate: 2011,
        endDate: 2014
    },
    {
        id:2,
        institution: 'Arabic Mastery Academy',
        certificate: 'Arabic Language',
        status: 'Ongoing',
        startDate: 2024,
        endDate: null
    },
    {
        id:3,
        institution: 'Darussalam Mosque, Singapore',
        certificate: 'Islamic Astronomy 101',
        status: 'Completed',
        startDate: 2025,
        endDate: 2025
    },
    {
        id:4,
        institution: 'Al-Misbah Academy',
        certificate: 'Diploma in Shariah Studies',
        status:'Ongoing',
        startDate: 2025,
        endDate: 2029,
        notes: 'In collaboration with International Islamic University, Malaysia. University wholly owned by International Islamic University Malaysia (IIUM is also known as Universiti Islam Antarabangsa (UIA) Malaysia).'
    },
    {
        id:5,
        institution: 'Islamic Finance Advisory',
        certificate: 'Diploma in Islamic Finance',
        status: 'Ongoing',
        startDate: 2026,
        endDate: 2027
    }
]