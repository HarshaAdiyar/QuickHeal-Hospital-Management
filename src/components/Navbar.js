import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/" style={{fontSize:30}}>QuickHeal</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{paddingLeft:"85%"}}>
      
      <form className="d-flex" >
        <button className="btn btn-outline-success"  type="submit">Home</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}
