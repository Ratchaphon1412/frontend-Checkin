import React  from 'react';
import PropType from 'prop-types'
import { Navigate } from "react-router-dom";

function ProtectedRoute({component}) {
    
    if(localStorage.getItem("token")){
        return component
    }else{
        
        return  <Navigate to="/login" replace/>;
    }
}

ProtectedRoute.propTypes = {
    component: PropType.element.isRequired

}

export default ProtectedRoute;