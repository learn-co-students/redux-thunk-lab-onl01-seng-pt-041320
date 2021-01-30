import React, { Component } from 'react';

const img = {
    float: "left",
    width:  "200px",
    height: "200px",
    objectFit: "cover"
}

class CatList extends Component {

    render() {

        const { catPics } = this.props

        return (
            <div>
                {catPics.map(cat => <img src={cat.url} key={cat.id} alt="" style={img}/>)}
            </div>
            
        )
    }

}

export default CatList