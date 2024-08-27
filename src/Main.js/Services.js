import React from 'react'

export default function Services() {



const Services = () => {
    return (
        <section className="services py-3 mb-lg-5">
            <div className="container">
                <div className="row py-3">
                    <div className="col-12 d-flex justify-content-lg-center flex-column align-items-lg-center pb-3">
                        <h2 style={{ fontSize: '4rem',color:'#1E2D3B' }}> SERVICES </h2>
                        <div className="servicesLine" style={{ width: '150px', height: '10px', background: '#EDCD1F' }}></div>
                    </div>
                </div>
                <div className="row px-lg-5 px-3 justify-content-center d-flex">
                    <div className="col-12 col-lg-3 mx-lg-2 px-0 my-3" style={{ background: '#eef0f2' }}>
                        <div className="services-image py-3">
                            <img src="../src/Image/PCP.webp" className="img-fluid" style={{ width: '100%' }} />
                        </div>
                        <div className="services-content py-3 px-4">
                            <h4 className="pb-2"> Preconstruction Planning </h4>
                            <p className="pt-2"> Stop project headaches before they even start. Our in-depth pre-construction planning turns your dream build into a reality, on time and on budget. Breathe easy knowing our experts are sweating the details so you don't have to. </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 mx-lg-2 px-0 my-3" style={{ background: '#eef0f2' }}>
                        <div className="services-image py-3">
                            <img src="../src/Images/AC.webp" className="img-fluid" style={{ width: '100%' }} />
                        </div>
                        <div className="services-content py-3 px-4">
                            <h4 className="pb-2"> Architectural Modelling </h4>
                            <p className="pt-2"> Stop project headaches before they even start. Our in-depth pre-construction planning turns your dream build into a reality, on time and on budget. Breathe easy knowing our experts are sweating the details so you don't have to. </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 mx-lg-2 px-0 my-3" style={{ background: '#eef0f2' }}>
                        <div className="services-image py-3">
                            <img src="../src/Images/CM.webp" className="img-fluid" style={{ width: '100%' }} />
                        </div>
                        <div className="services-content py-3 px-4">
                            <h4 className="pb-2"> Construction Management </h4>
                            <p className="pt-2"> Stop project headaches before they even start. Our in-depth pre-construction planning turns your dream build into a reality, on time and on budget. Breathe easy knowing our experts are sweating the details so you don't have to. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

  return (
    <div>
        <Services />
        
    </div>
  )
}
