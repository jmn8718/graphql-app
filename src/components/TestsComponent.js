import React, { Component, PropTypes } from 'react'

export default class TestsComponent extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render () {
    console.log(this.props.data)
    return (
      <div>
        {JSON.stringify(this.props.data)}
      </div>
    )
  }
}
