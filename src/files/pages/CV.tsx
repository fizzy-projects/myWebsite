import { SecularEducationData,ReligiousEducationData } from "../data/education";
import { WorkExperienceData } from "../data/workExperience";
import type { Education, WorkExperience } from "../types";

export const CV: React.FC = ()=>{
    const sortEducationFunction = (a:Education,b:Education)=>{
        const statusOrder = {Ongoing:0, Completed:1}
        const statusDiff = statusOrder[a.status]-statusOrder[b.status];
        if (statusDiff!==0) return statusDiff;
        return b.id-a.id;
    }
    const sortWorkExperienceFunction = (a:WorkExperience,b:WorkExperience)=>{
        return b.id-a.id
    }
    const sortedSecularEducationData = SecularEducationData.sort(sortEducationFunction)
    const sortedReligiousEducationData = ReligiousEducationData.sort(sortEducationFunction);
    const sortedWorkExperienceData = WorkExperienceData.sort(sortWorkExperienceFunction)

    return(
        <section className="cv-section">
            <div className="section-header">
                <h2 className="section-title">Curriculum Vitae</h2>
                <p className="section-subtitle">
                    Details of my academic and work experience.
                </p>
            </div>

            <div className="cv-gallery">

                <div className="cv-card">
                    <div className="cv-header">
                        <h3 className="cv-title">Education</h3>
                    </div>

                    <div>
                        {sortedSecularEducationData.map((course,index) => (
                            <div key={index} className="cv-description">
                                <h4>{course.certificate}</h4>
                                {course.title && <p>{course.title}</p>}
                                {course.additionalTitle && <p>{course.additionalTitle}</p>}
                                <p>{`${course.institution},
                                    ${course.status==='Completed'? course.endDate : `${course.endDate? course.endDate : 'XXXX'} (Expected)`}`}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="cv-card">
                    <div className="cv-header">
                        <h3 className="cv-title">Religious Studies</h3>
                    </div>

                    <div>
                        {sortedReligiousEducationData.map((course,index) => (
                            <div key={index} className="cv-description">
                                <h4>{course.certificate}</h4>
                                <p>{`${course.institution},
                                    ${course.status==='Completed'? course.endDate : `${course.endDate? course.endDate : 'XXXX'} (Expected)`}`}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="cv-card">
                    <div className="cv-header">
                        <h3 className="cv-title">Professional Experience</h3>
                    </div>

                    <div>
                        {sortedWorkExperienceData.map((work,index) => (
                            <div key={index} className="cv-description">
                                <div>
                                    <h4>{work.title}</h4>
                                    
                                </div>
                                <div>{`${work.startDate}-${work.endDate}`}</div>
                                <p>
                                    {`${work.company}`}
                                </p>
                                {work.department && <p>{`(${work.department})`}</p>}
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </section>
    )
}