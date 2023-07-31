import React, { Component } from 'react'

export default class Projects extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-experience" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">highlights</span>
								<h2 className="colorlib-heading animate-box">Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<div className="timeline-centered">
									<article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
										<div className="timeline-entry-inner">
											<div className="timeline-icon color-1">
												<i className="icon-pen2" />
											</div>
											<div className="timeline-label">
												<h2>Tiffin Delivery Website</h2>
												<p>The Tiffin Delivery Website is an online platform designed to facilitate the
													ordering and delivery of tiffin meals. The website aims to provide a
													convenient and efficient way for customers to enjoy tiffin meals delivered
													right to their doorstep.
													Users can pay with Cash on delivery or through the Paypal payment gateway.
													With admin login, admin can add, delete and edit listed items and allow order
													status to move to the next stage.
													Tech Stack :- HTML, CSS, React, NextJs, MongoDB
												</p>
											</div>
										</div>
									</article>
									<article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
										<div className="timeline-entry-inner">
											<div className="timeline-icon color-2">
												<i className="icon-pen2" />
											</div>
											<div className="timeline-label">
												<h2>AutoML Hub Website
												</h2>
												<p>
													The AutoML Hub is a comprehensive website that utilizes machine learning
													models to predict various applications related to automobiles.
													It offers accurate predictions for auto insurance fraud detection, car prices,
													loan status, and car fuel efficiency. This website provides valuable insights
													to aid decision-making in the automotive industry.
													Tech Stack :- Python, Flask, Scikit-learn, NumPy, Pandas, Seaborn

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
												<h2>AI Powered Hub Website
												</h2>
												<p>
													In this project, I integrated various AI-powered websites using the OpenAI
													API. Each website serves a unique purpose
													Tech Stack :- Python, Flask, OpenAI API
													AI P
												</p>
											</div>
										</div>
									</article>
									<article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
										<div className="timeline-entry-inner">
											<div className="timeline-icon color-4">
												<i className="icon-pen2" />
											</div>
											<div className="timeline-label">
												<h2>Amazon Lex ChatBot Integrated with Whatsapp Messenger
												</h2>
												<p>
													Amazon Lex enables you to build sophisticated, natural language chatbots
													into your new and existing applications.
													By integrating Amazon Lex with WhatsApp, businesses can provide their
													customers with 24/7 support.
													Tech Stack :- Amazon Lex, Twilio
													Am
												</p>
											</div>
										</div>
									</article>
									<article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
										<div className="timeline-entry-inner">
											<div className="timeline-icon color-5">
												<i className="icon-pen2" />
											</div>
											<div className="timeline-label">
												<h2>BROoM ChatApp
												</h2>
												<p>
													Chat application where users can create their own Room and communicate
													with each other freely. Users joining and leaving room message
													broadcasted to every other users on that room.
													Tech Stack :- HTML, CSS, JS, NodeJs, Socket.io, Express
													BRO
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
