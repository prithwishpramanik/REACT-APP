import React,{Component} from 'react';

class Sort extends Component{
    render(){
        return(
            <nav id="sort" className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Sort By</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Price High to Low <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Price Low to High</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Alphabetically Low to High</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Alphabetically High to Low</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Sort;