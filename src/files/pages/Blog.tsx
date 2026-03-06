import type React from "react";


export const Blog: React.FC = () => {
    // Blog Gallery and BlogPost
    // const blogArray:number[]=[1,2,3];
    return(
        <section className="blog-section">
            <div className="section-header">
                <h2 className="section-title">Blog</h2>
                <p className="section-subtitle">
                    Thoughts.
                </p>
            </div>

            <div className="blog-gallery">
                <div className="blog-card">
                    <div className="blog-card-image">
                        <img src="" alt="" />
                    </div>
                    <div className="blog-card-content">
                        <div className="blog-card-meta">
                            <span className="blog-card-date">
                                {null}
                            </span>
                        </div>
                        <h4 className="blog-card-title">Title</h4>
                        <p className="blog-card-description">No posts yet.</p>
                    </div>
                </div>
            </div>

            {/* <div className="blog-gallery">
                {blogArray.map((_value)=>(
                    <a className="blog-card-hyperlink" href="">
                        <div className="blog-card">
                            <div className="blog-card-image">
                                <img src="" alt="Image" />
                            </div>
                            <div className="blog-card-content">
                                <div className="blog-card-meta">
                                    <span className="blog-card-date">
                                        06 March 2026
                                    </span>
                                </div>
                                <h4 className="blog-card-title">Title</h4>
                                <p className="blog-card-description">Description</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div> */}

        </section>
    )
}