import React, { Component } from 'react'

export default class Beer extends Component {
    render() {
return (
<div className="beerDiv">
   <div style={{fontSize:'10pt'}}>{this.props.beer.name}</div>
   <img src={this.props.beer.image_url} alt="" style={{width: '30px', float: 'left',paddingRight: '10px',paddingBottom: '10px'}}/>
   <p style={{fontSize:'10pt'}}>{this.props.beer.tagline}</p>
</div>
)
}
}
