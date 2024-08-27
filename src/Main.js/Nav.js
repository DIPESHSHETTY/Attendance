import React from 'react'

export default function Nav() {


    const Nav = () => {
        return (
            <nav className="fixed-md-top" style={{ height: 'auto', background: 'linear-gradient(to right, #EDCD1F 50%, #1E2D3B 50%)' }}>
                <div className="nav-container container" style={{ background: '#1E2D3B' }}>
                    <div className="row">
                        <ul className="nav nav-part-1 col-lg-3 col-8">
                            <li className="nav-item nav-brand" style={{ background: '#EDCD1F' }}>
                                <a className="nav-link py-3 px-4" href="#" style={{ color: 'black' }}>
                                    <img src="Images/logo1.png" alt="Logo" />
                                </a>
                            </li>
                        </ul>
                        <ul className="nav nav-part-2 d-none d-lg-flex col-lg-9 justify-content-end align-items-center">
                            <li className="nav-item">
                                <a className="nav-link px-3 py-3" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3 py-3" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3 py-3" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3 py-3" href="#">Our Technologies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3 py-3" href="#">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3 py-3" href="#">Contact Us</a>
                            </li>
                        </ul>
                        <div className='menu-btn d-lg-none d-flex justify-content-end col-4'>
                            <button type='button' className='btn' data-bs-toggle="offcanvas" id="mainNav" data-bs-target="#demo">
                                <i className="fa-solid fa-bars fa-2xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
    


  return (
    <div>
     <Nav />

    </div>
  )
}
