import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Base({children}){
    
        return(
            <>
            <Navbar/>
            <div className=" mt-16 mb-32">
            {children}
            </div>
            <Footer/>
            </>
        )
}

export default Base;
