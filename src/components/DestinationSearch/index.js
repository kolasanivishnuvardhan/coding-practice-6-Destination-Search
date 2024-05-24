import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}
  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value.toLowerCase()})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const fiteredDestinationsList = destinationsList.filter((destination)=>destination.name.toLowerCase().includes(searchInput))
  
    console.log(searchInput)
    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <div className="search-input-container">
          <input
            type="search"
            className="search-input"
            placeholder="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <div className="destinations-container">
          <ul className="ul">
            {fiteredDestinationsList.map(eachDestination => (
              <DestinationItem eachDestination={eachDestination} key={eachDestination.id}/>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
