import React,{Component} from 'react';

class Card extends Component{
    render(){
        return (<div className="card" style={{ width: '10rem',margin:0 }}>
                <img className="card-img-top" src="https://static.toiimg.com/photo/70072353.cms" ></img>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.text}</p>
                    <a href="#" className="btn btn-primary">Shop Now</a>
                </div>
        </div>
    )
    }

}

export default Card