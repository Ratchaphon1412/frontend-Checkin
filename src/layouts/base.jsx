import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Base({children}){
    
        return(
            <>
            <Navbar/>
            <div className="w-full h-screen">
            {children}
            </div>
            <Footer/>
            </>
        )
}

export default Base;
