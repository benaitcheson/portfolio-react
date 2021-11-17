// React dependencies
import React from 'react';

const Contact = () => {
    return (
        <section className="mx-auto p-4 container">
            <h2>Contact</h2>
            
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-label="emailHelp"/>
                </div>

                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                    <label for="floatingTextarea2">Comments</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </section>
    )
}

export default Contact