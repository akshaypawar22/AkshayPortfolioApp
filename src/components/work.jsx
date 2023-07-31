import React, { Component } from 'react'

export default class Work extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-experience" data-section="work">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">highlights</span>
                                <h2 className="colorlib-heading animate-box">work experience</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-centered">
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-2">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Colgate Global Business Services <span>Jul 2023 - Dec 2023</span></h2>
                                                <p>Done six month internship in Colgate Global Business Services from month july to Dec as Full-Stack Developer, in internship period worked on tools such as React, NodeJs & NPM.
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-3">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Sparks Foundation Web Development Intern <span>Jul 2022 - Aug 2022</span></h2>
                                                <p>Completed one month internship in Sparks Foundation from month july to august, in internship they given us list of task to complete, where we have to create website and deploy that website in github, i created charity website where users able to donate money with through online payment and after successful transaction a email will be send to user where all details about transaction and users will be written with pdf file.
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
