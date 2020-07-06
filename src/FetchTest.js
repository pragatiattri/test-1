import React, { Component } from 'react';
class CardComponent extends Component {
    state = {  };

    componentDidMount() {
        fetch('https://swapi.dev/api/people/1/').then((res) => res.json())
        .then((res) => {
            console.log("data fetched is", res);
            this.setState({
                data: res.films
            })
        })
    };

    render() { 
        const data = this.state.data || [];
        const rows =  data && data.length && data.map((item, index) => (
            <div key={index}>OKAY</div>
        ))
        
        return ( 
        <div> 
          { data && data.length && data.map((item, index) => (
            <div key={index}>OKAY</div>
        ))}
        {rows}
         </div> 
     );
    }
}
 
export default CardComponent;