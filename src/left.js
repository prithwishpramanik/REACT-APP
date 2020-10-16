import React,{Component}from 'react';

class Left extends Component{
    render(){
        return(
            <div>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button type="button" className="btn btn-danger mt-2">Search</button>


                   <div className="row mt-3">
                       <h2><b>Select Tags</b></h2>
                   </div>
                    <div className="row mt-2">
                        <button type="button" className="btn btn-warning mt-2 ml-1">Redmi</button>        <button type="button" className="btn btn-warning mt-2 ml-1">Apple</button>
                        <button type="button" className="btn btn-warning mt-2 ml-1">Oppo</button>
                    </div>
                <div className="row mt-2">
                    <button type="button" className="btn btn-warning mt-2 ml-1">Samsung</button>        <button type="button" className="btn btn-warning mt-2 ml-1">Realme</button>
                    <button type="button" className="btn btn-warning mt-2 ml-1">Oneplus</button>
                </div>

                <div className="row mt-4">
                    <h2>Select Range</h2>
                    </div>

                <div className="row mt-2">
                    <div className="slidecontainer">
                        <input type="range" min="1" max="100" value="50" className="slider" id="myRange"></input>
                    </div>
                </div>
                </div>











    )




        }
}

export default Left;





