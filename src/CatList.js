import React, { Component } from 'react'

class CatList extends Component {
  render(){
    return (
      <div>
        {this.props.catPics.map((catPic) => <img src={catPic.url} alt={"pic of cat"}></img>)}
      </div>
    )
  }
}

export default CatList