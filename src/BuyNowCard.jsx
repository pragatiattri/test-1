import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class BuyNowCard extends Component {
    state = {  }
    componentDidMount() {
        console.log("Buy now card fetched",this.props.location.pathname.match(/\/buy\/(\d+)/)[1]);

        const id =  this.props.location.pathname.match(/\/buy\/(\d+)/)[1];
        fetch(`https://swapi.dev/api/people/${id}`).then((res) => res.json())
        .then((apiRes) => {
            console.log("api to fetcg dataa", apiRes);
            this.setState({
                dummyData : apiRes.films
            })
        })
    }
    render() { 
        return ( <div className="flex-blk just-center">
            <div>
                <div>
        {   
            <Link to="/list">              
            <div className="btn btn-secondary btn-sm-2 back-btn">  BACK</div>          
            </Link>
        }
        </div>
            <img src="https://picsum.photos/400/400"/>
            <div className="sub-cat"> Buy This Product for Rs. 1000</div>
            </div> 
            </div> 

            );
    }
}
 
export default BuyNowCard;