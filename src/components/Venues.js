import React, { Component } from 'react'
import ListItem from './ListItem'

export default class Venues extends Component {
  render() {
    return (
      <ol className="venuelist">
        {this.props.venues && this.props.venues.map((venue, id) => (
          <ListItem key={id} {...venue} handleListItemClick={this.props.handleListItemClick} />
        ))}
      </ol>
    )
  }
}
