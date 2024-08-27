import React from 'react'

export default function Aboutus() {

const AboutUs = () => {
    return (
        <section className="AboutUs about-us py-lg-5" style={{ overflow: 'hidden', background: '#eef0f2' }}>
            <div className="container py-5" style={{ height: 'auto', background: 'transparent' }}>
                <div className="row">
                    <div className="col-12 d-lg-none p-0 my-3">
                        <img src="../src/Images/AboutUs1.jpg" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 px-xl-5">
                        <h1 style={{ fontSize: '4rem', color: '#1E2D3B' }}> ABOUT US </h1>
                        <div className="aboutUsLine mb-5" style={{ width: '200px', height: '10px', background: '#EDCD1F' }}></div>
                        <p className="mt-3 fw-light" style={{ fontSize: '1rem' }}>
                            At <span className="fw-normal" style={{ color: '#EDCD1F' }}>BUILDWELL CONSTRUCTION</span>, formerly known as OM CONSTRUCTION, we believe that every structure tells a story. Our story is one of passion, expertise, and a relentless pursuit of perfection. With over a decade of experience, we have evolved into a trusted name, recognized for delivering projects that stand the test of time.<br/><br/>
                            Being established in 2010, we pride ourselves on our unwavering commitment to quality and our promise of delivering utmost client satisfaction. Over the years, we have successfully completed a wide array of projects spanning across residential, commercial, institutional, and industrial sectors. Our proficiency in estimation, construction, design, architecture, project management, preconstruction, and finishing services ensures that our clients obtain a top-notch product at a reasonable and competitive cost, delivered within a realistic timeframe.<br/><br/>
                            Thank you for considering us as your trusted partner in construction. Together, let's build a future that stands strong and inspires... generations to come.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
  return (
    <div>
        <AboutUs />
        
    </div>
  )
}
