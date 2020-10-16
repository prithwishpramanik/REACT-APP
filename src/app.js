import React,{Component} from 'react'
import Navbar from'./navbar'
import Jumbotron from './jumbotron'
import Card from "./card";
import Left from "./left";
import Sort from "./sort";
import './style.css'


class App extends Component{
    render() {
        return(
            <div>
                <Navbar/>

                <div className="container">
                    <div className="row">
                        <div className="col-4 mt-5 border-right"><Left/></div>
                        <div className="col-8">
                            <div className="mt-3"><Sort/></div>

                            <div className="container mt-5">

                                <div className="row row-cols-4 mt-3">
                                    <div className="col"><Card title="OPPO Find X2" text="Rs 35000"/></div>
                                    <div className="col"><Card title="OnePlus 7T" text="Rs 35000"/></div>
                                    <div className="col"><Card title="OnePlus 8 Pro" text="Rs 55000"/></div>
                                    <div className="col"><Card title="Redmi Note 9" text="Rs 15000"/></div>
                                </div>
                                <div className="row row-cols-4 mt-3">
                                    <div className="col"><Card title="Redmi POCO F3 " text="Rs 21000"/></div>
                                    <div className="col"><Card title="Apple Iphone &" text="Rs 27000"/></div>
                                    <div className="col"><Card title="OPPO Find X2" text="Rs 35000"/></div>
                                    <div className="col"><Card title="OPPO Find X2" text="Rs 35000"/></div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>



            </div>
        )
    }
}

export default App