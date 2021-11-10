// React dependencies
import React from 'react';

const Contact = () => {
    return (
        <section>
            <h2>Contact</h2>
            
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-label="emailHelp"/>
                </div>

                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                    <label for="floatingTextarea2">Comments</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </section>
    )
}

export default Contact