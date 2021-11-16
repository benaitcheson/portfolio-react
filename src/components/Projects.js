// React dependencies
import React from 'react';

const Projects = () => {
    return (
        <section class="mx-auto p-4 container">
            <h2>Projects</h2>

            <div class="row gy-3">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Two sided Market place</h5>
                            <p class="card-text">This project is a two-sided marketplace for financial planners and customers to meet. This project was created entirely with Ruby on Rails with Postgresql used for the database. This was my first time having a back-end to work on.</p>
                            <a href="https://t2a2-marketplace-app.herokuapp.com/" class="btn btn-primary">Go to Deployed Website</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Javascript Calculator</h5>
                            <p class="card-text">Built on Codepen.io in my spare time. This project taught me some fundamental Javascript concepts.</p>
                            <a href="https://codepen.io/benaitcheson/pen/YzxXZwq" class="btn btn-primary">Go to my Codepen Site</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Tanda Rails Challenge + React</h5>
                            <p class="card-text">This project was forked from the Tanda work samples found on Github. I used this as a follow up to the Two Sided Marketplace application to learn Ruby on Rails further.</p>
                            <a href="https://github.com/benaitcheson/Tanda-WorkSample-adnat" class="btn btn-primary">Go to the Repository for this Project</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Coder Academy Hackathon 1</h5>
                            <p class="card-text">First of two Hackathons for Coder Academy. For this Hackathon we built a Trivia question builder from an API. I learnt a lot about Git Collaboration on this project.</p>
                            <a href="https://github.com/NatalieLouise91/Hackathon1" class="btn btn-primary">Go to the Repository for this Project</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Coder Academy Hackathon 2</h5>
                            <p class="card-text">TEXT.</p>
                            <a href="https://github.com/NatalieLouise91/bookapp" class="btn btn-primary">Go to the Repository for this Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects