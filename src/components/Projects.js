// React dependencies
import React from 'react';

const Projects = () => {
    return (
        <section className="mx-auto p-5 container">
            <h2>Projects</h2>

            <div className="row gy-3">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Two sided Market place</h5>
                            <p className="card-text">This project is a two-sided marketplace for financial planners and customers to meet. This project was created entirely with Ruby on Rails with Postgresql used for the database. This was my first time having a back-end to work on.</p>
                            <a href="https://t2a2-marketplace-app.herokuapp.com/" className="btn btn-primary">Go to Deployed Website</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Javascript Calculator</h5>
                            <p className="card-text">Built on Codepen.io in my spare time. This project taught me some fundamental Javascript concepts.</p>
                            <a href="https://codepen.io/benaitcheson/pen/YzxXZwq" className="btn btn-primary">Go to my Codepen Site</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Tanda Rails Challenge + React</h5>
                            <p className="card-text">This project was forked from the Tanda work samples found on Github. I used this as a follow up to the Two Sided Marketplace application to learn Ruby on Rails further.</p>
                            <a href="https://github.com/benaitcheson/Tanda-WorkSample-adnat" className="btn btn-primary">Go to the Repository for this Project</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Coder Academy Hackathon 1</h5>
                            <p class="card-text">First of two Hackathons for Coder Academy. For this Hackathon we built a Trivia question builder from an API. I learnt a lot about Git Collaboration on this project.</p>
                            <a href="https://github.com/NatalieLouise91/Hackathon1" className="btn btn-primary">Go to the Repository for this Project</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Coder Academy Hackathon 2</h5>
                            <p className="card-text">TEXT.</p>
                            <a href="https://github.com/NatalieLouise91/bookapp" className="btn btn-primary">Go to the Repository for this Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects