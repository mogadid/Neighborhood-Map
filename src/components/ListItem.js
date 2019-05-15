import React, { Component } from 'react'

export default class ListItem extends Component {
  render() {
    return (
      <li
        aria-labelledby="listItem"
        className="listitem"
        onClick={() => this.props.handleListItemClick(this.props)}
      >
        {this.props.name}
      </li>
    )
  }
}
