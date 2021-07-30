import React from 'react';
import loading from '../assets/img/loading2.gif'
import '../assets/css/componentes/loading.css'

const Loading = () => {

    return (
        <div className="centralizar ">
            <img className="container"  src={loading} alt={"loading"}/>
        </div>
    )
}

export default Loading