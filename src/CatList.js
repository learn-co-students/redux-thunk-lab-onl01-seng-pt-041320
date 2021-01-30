import React, { Component } from 'react';

class CatList extends Component {

    render() {

        const { catPics } = this.props

        return (
            <div>
                {catPics.map(cat => <img src={cat.url} key={cat.id} alt=""/>)}
            </div>
            
        )
    }

}

export default CatList