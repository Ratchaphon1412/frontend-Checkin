import React from 'react'
import Base from '../layouts/base'
import Carousel from '../components/CarouselDashboard';
import  Recent from '../components/Recents';

function Dashboard(){
    return(
        
           <Base>
            <div className='h-screen w-full '>
                <div className="flex flex-col justify-center items-center">
                    <Carousel/>
                    <Recent/>
                </div>
            </div>
           </Base>
        
    )
}

export default Dashboard;