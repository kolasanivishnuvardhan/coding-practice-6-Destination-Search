import {Component} from 'react'

import './index.css'

class DestinationItem extends Component {
  render() {
    const {eachDestination} = this.props
    const {imgUrl, name} = eachDestination
    return (
      <li className="destination-container">
        <img src={imgUrl} alt={name} className="image" />
        <p className="name">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
