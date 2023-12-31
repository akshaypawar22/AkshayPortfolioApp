import React, { Component } from 'react'

export default class Skills extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-about" data-section="skills">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">What I do?</span>
								<h2 className="colorlib-heading">Here are some of my expertise</h2>
							</div>
						</div>
						<div className="row row-pt-md">
							<div className="col-md-4 text-center animate-box">
								<div className="services color-1">
									<span className="icon">
										<i className="icon-bulb" />
									</span>
									<div className="desc">
										<h3>Web Development </h3>
										<p>I have experience building websites using JavaScript,HTML,CSS and for Backend I know NodeJs</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 text-center animate-box">
								<div className="services color-3">
									<span className="icon">
										<i className="icon-phone3" />
									</span>
									<div className="desc">
										<h3>Data Structures & Algorithms</h3>
										<p>I have good grasp over fundamental of Programming Language like JAVA, C++, Python</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 text-center animate-box">
								<div className="services color-5">
									<span className="icon">
										<i className="icon-data" />
									</span>
									<div className="desc">
										<h3>Dev Ops</h3>
										<p>I am Looking forward to work more in DevOps, As of Now I know how to use Git and GitHub and I just started learning AWS</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 text-center animate-box">
								<div className="services color-2">
									<span className="icon">
										<i className="icon-data" />
									</span>
									<div className="desc">
										<h3>DBMS</h3>
										<p>I have knowledge of both SQL and NOSQL databases. In SQL i know MYSQL, Oracle and Mongodb In NOSQL.</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 text-center animate-box">
								<div className="services color-4">
									<span className="icon">
										<i className="icon-phone3" />
									</span>
									<div className="desc">
										<h3>Framework</h3>
										<p>I know frameworks like ReactJs, AngularJs, Flask and CSR Frameworks like NextJs, in Mobile Programming I am Familiar with Ionic</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 text-center animate-box">
								<div className="services color-6">
									<span className="icon">
										<i className="icon-bulb" />
									</span>
									<div className="desc">
										<h3>Tools</h3>
										<p>I also have Experiance on RPA Tools like Automation Anywhere, also worked on visualization tools like Pentaho, PowerBI.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

			</div>
		)
	}
}
