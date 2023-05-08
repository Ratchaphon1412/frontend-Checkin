import React,{useState,useEffect} from 'react'
import EmployeeCalendar from '@/components/EmployeeCalendar.jsx';
import Base from '@/layouts/base.jsx'
import moment from 'moment';
import  {useDispatch,useSelector} from 'react-redux'
import {getHistory,checkIn} from '@/stores/api/index'



function CalendarPage() {
    const dispatch = useDispatch();
    const [showDate, setShowDate] = useState([]);
    const history = useSelector(state => state.apiStore.date)

    // function formatDate(markedDates){
        
    //     markedDates.forEach((date, index) => {
    //         let newDate = moment(date).subtract(1, "days");
    //         markedDates[index] = newDate.format('YYYY-MM-DD');
    //     }   
    //   )
    //   console.log(markedDates)
   
    //   return markedDates;
    // }
    useEffect(() => { 
        dispatch(getHistory())
        setShowDate(history);
        // formatDate(history)
       
     }   , [])

     function handleClickCheckin(){
        let dateCheckIn = moment().format('YYYY-MM-DD')
      
        dispatch(checkIn({dateCheckIn}))
        dispatch(getHistory())
        setShowDate(history);
     }
    
    
    
    const markedDates = [
        "2023-05-05",
        "2023-05-10",
        "2023-05-15",
      ];

     
    

    return (
        <Base>
        <div className="w-full h-screen">
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center mb-4 ">
                    <h1 className="text-xl  mb-4">Check-in</h1>
               <div className="flex flex-row  justify-center items-center ">
                   
                   <h1 className="text-xl mr-6">Check-in for event:</h1>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">Click</button>
                   
               </div>
       
                
            </div>
            
            <div  className='flex flex-col justify-start'>
            <h1 className="text-xl mr-6 mb-4">Check-in for daily</h1>  
            <EmployeeCalendar markedDates={history} />
            </div>

            <div className="h-96 flex flex-col justify-center items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl" onClick={ handleClickCheckin}>Click-in-today</button>
            </div>
        </div>

        


        </div>
        </Base>


    )

}

export default CalendarPage;