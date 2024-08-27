import React from 'react'

export default function Counters() {
 

    const Counters = () => {
        return (
            <section className="Counter py-5" style={{ background: '#EDCD1F' }}>
                <div className="container">
                    <div className="row px-3">
                        <div className="establish col-6 col-lg-3 d-flex justify-content-center flex-column pb-4">
                            <h2 style={{ fontSize: '4rem', textAlign: 'center', color: '#00365E', opacity: '0.8' }}>2010</h2>
                            <h4 style={{ textAlign: 'center', color: '#00365E', opacity: '0.8' }}>Year Established</h4>
                        </div>
                        <div className="projects col-6 col-lg-3 d-flex justify-content-center flex-column pb-4">
                            <h2 style={{ fontSize: '4rem', textAlign: 'center', color: '#00365E', opacity: '0.8' }}>206</h2>
                            <h4 style={{ textAlign: 'center', color: '#00365E', opacity: '0.8' }}>Projects Completed</h4>
                        </div>
                        <div className="contracters col-6 col-lg-3 d-flex justify-content-center flex-column pb-4">
                            <h2 style={{ fontSize: '4rem', textAlign: 'center', color: '#00365E', opacity: '0.8' }}>870</h2>
                            <h4 style={{ textAlign: 'center', color: '#00365E', opacity: '0.8' }}>Contractors Appointed</h4>
                        </div>
                        <div className="awards col-6 col-lg-3 d-flex justify-content-center flex-column pb-4">
                            <h2 style={{ fontSize: '4rem', textAlign: 'center', color: '#00365E', opacity: '0.8' }}>26</h2>
                            <h4 style={{ textAlign: 'center', color: '#00365E', opacity: '0.8' }}>Awards Won</h4>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
  return (
    <div>
         <Counters />    
    
    </div>
  )
}
