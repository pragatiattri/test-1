import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import BuyNowCard from './BuyNowCard'

class FoodCard extends Component {
    state = {
        dummyData: [],
        res: {}
      };
    componentDidMount(){
        fetch('https://swapi.dev/api/people/1/').then((res) => res.json())
        .then((apiRes) => {
            console.log("api to fetcg dataa", apiRes);
            this.setState({
                dummyData : [...apiRes.films, ...apiRes.films],
                res: apiRes,
            })
        })
    }
    render() { 
        const dummyData = this.state.dummyData || [];
        const res = this.state.res;
        const stars = [1,2,3,4,5];
        let content  =  dummyData && dummyData.length ?
             dummyData.map((item, index) => (
            <div className="item-card" key={index}> 
            
                <img src="https://picsum.photos/300/150" className="title-img"/>
              
                 <div> 
                     <div className="flex-blk">
                            <h3 className="title">
                              Faasos #{index + 1}
                            </h3>
                            <div>
                                {stars.map((star, index) => (
                                    <i className="fa fa-star col-yellow" key={index} style={{ fontSize: 14, marginRight:2}} ></i>
                                ))}
                                <span style={{ fontSize: 16, fontWeight: 700}}> 4.7 </span>
                            </div>
                    </div>
                    <div className="sub-title t-left" style={{fontSize:12}}> New Delhi</div>
                    <div className="t-cat" style={{fontSize:14, marginBotton:10}}> Food Voucher</div>
                    <div className="more-info t-left">
                        <div className="">Buy a gift Voucher worth Rs. 5000</div>
                        <div className="">Complimentary Mocktails!!!</div>
                    </div>
                    <div className="flex-blk">
                        <i className="fa fa-heart-o col-red"></i>
                        <Link to={"/list/buy/" + (index+1)}>    BUY NOW</Link> 
                     </div>

                 </div>
   
                {/* <Link to={"/list/buy/" + (index+1)}><BuyNowCard props={index}/></Link> */}
            </div>
        )) : null
             return ( <div className="flex-blk">{content}</div> );
    }
}
 
export default FoodCard;