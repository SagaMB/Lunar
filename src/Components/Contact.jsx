import React from 'react';
import "../Styles/contact.scss";

export const Contact = () => {
  return (
     <div className="contact">
        <main>
          <h1>Any Query</h1>
          <form>
            <div>
              <label>Name</label>
              <input type="name" required placeholder="abc" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" required placeholder="abc@xyz.com" />
            </div>

            <div>
              <label>Query</label>
              <input type="text" required placeholder="write query here..." />
            </div>

            <button type="submit">Submit</button>
          </form>
        </main>
      </div>
  )
}
