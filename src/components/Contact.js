// React dependencies
import React from 'react';

const Contact = () => {
    return (
        <section className="mx-auto p-5 container">
            <h2>Contact</h2>
            
            <form>
                <div className="mb-3">
                    <label for="InputEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" aria-label="emailHelp"/>
                </div>

                <div className="mb-3">
                    <label for="InputName" className="form-label">Your name</label>
                    <input type="text" className="form-control" aria-label="emailHelp"/>
                </div>

                <div className="mb-3">
                    <label for="InputComment" className="form-label">Comments</label>
                    <textarea className="form-control" placeholder="Leave a comment here"></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </section>
    )
}

export default Contact