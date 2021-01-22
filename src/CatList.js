// write your CatList component here
import React, { Component } from 'react';


class CatList extends Component {

    render () {
        return (
            <div>
                {this.props.catPics.map((pic) => <img src={pic.url} alt={pic.url}></img>)}
            </div>
        )
    }

}

export default CatList