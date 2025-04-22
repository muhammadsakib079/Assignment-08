import React from 'react'

function Hero() {
    return (
        <>
            <div
                className="hero mt-15 min-h-[63vh] bg-top rounded-4xl brightness-120 grayscale-25 "
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/nM2MsDNL/banner-img-1.png)",
                }}
            >
                <div className="text-neutral-content text-center ">

                    <div className="max-w-3xl mx-auto">
                        <h1 className="my-8 text-5xl font-bold">It avoids subjective claims or exaggeration that might raise red flags legally</h1>
                    </div>

                    <div className='max-w-5xl'> 
                    <p className="mb-8 ">
                        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                    </p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Hero
