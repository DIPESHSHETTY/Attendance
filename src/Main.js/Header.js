import React from 'react'
import H1vid from '../images/header_bg_vid_1.mp4';
import H2vid from '../images/header_bg_vid_2.mp4';

export default function Header() {


    const Header = () => {
        return (
            <header className="header d-flex justify-content-center align-items-center" style={{ position: 'relative' }}>
                <div className="container-fluid p-0 m-0" style={{ overflow: 'hidden', height: '800px' }}>
                    <video style={{ width: '100%', opacity: '0.8', objectFit: 'cover', height: '100%' }} autoPlay muted loop className="p-0 m-0 d-none d-md-flex">
                        <source src={H1vid} type="video/mp4" />
                    </video>
                    <video style={{ width: '100%', objectFit: 'cover', height: '100%' }} autoPlay muted loop className="p-0 m-0 d-md-none">
                        <source src={H2vid} type="video/mp4" />
                    </video>
                    {/* <img src="Images/header_bg-img.png" style={{ width: '100%', position: 'absolute', objectFit: 'fill' }} className="p-0 m-0 d-inline d-lg-none" /> */}
                </div>
                <div className='header-content container px-sm-2 px-md-3 d-flex justify-content-center align-items-md-center flex-column' style={{ paddingTop: '200px', position: 'absolute', zIndex: 10, background: 'transparent' }}>
                    {/* Uncomment the following lines if needed */}
                    {/* <h2 style={{ color: '#170257', fontWeight: 'bolder', fontSize: '6rem' }}> Building a </h2>
                    <h2 className="" style={{ color: '#170257', fontWeight: 'bolder', fontSize: '6rem' }}> <span style={{ color: '#EDCD1F' }}>Concrete Future</span> </h2>
                    <p style={{ color: '#170257', fontSize: '1.5rem', fontWeight: 'bolder' }}> Honest, Reliable Builders since 1968 </p>
                    <div className="header-btn-div">
                        <button className="py-3 px-4 me-1 btn-1" type="button" style={{ fontWeight: 'lighter', background: '#EDCD1F', color: '#170257', border: '2px solid #170257' }}> View Projects </button>
                        <button className="py-3 px-4 ms-1 btn-2" type="button" style={{ fontWeight: 'lighter', background: '#EDCD1F', color: '#170257', border: '2px solid #170257' }}> Contact Us </button>
                    </div> */}
                    <h2 className="" style={{ color:'white' }}> LEADERS IN QUALITY </h2>
                    <h2 className="" style={{ color:'white' }}> CONSTRUCTION AND </h2>
                    <h2 className="pb-4"> INFRASTRUCTURE </h2>
                    <div className="header-down-arrow pt-5 d-flex justify-content-center" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                        <img src="../Images/header_down_arrow.png" />
                    </div>
                </div>
            </header>
        );
    }
    
    

  return (
    <div>
        <Header />
    </div>
  )
}
