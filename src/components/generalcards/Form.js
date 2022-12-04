import React from 'react'

function Form() {

  return (
    <div>
        <form>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="get-in-touch">
          <div className="input">
            <input id="email" type="text" placeholder="Email adress"/>
            <button>Get Starte {">"}</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form