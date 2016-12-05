import React, { Component, PropTypes } from 'react'
import { fromJS } from 'immutable'
import gql from 'graphql-tag'

import { connect } from 'react-redux'
import { graphql } from 'react-apollo'

import TestsComponent from './TestsComponent'

class TestApp extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }
  render () {
    return (
      <div>
        TestApp
        <TestsComponent data={fromJS(this.props.data.tests)} />

      </div>
    )
  }
}

const TodoesQuery = gql`
  query {
    todos {
      id
      complete
      text
    }
  }
`
const TestsQuery = gql`
  query {
    tests {
      id
      identifiers {
        device_model
        build_serial
      }
      results {
        healt
        percentage
        plugged
        temperature
        time_stamp
        voltage
      }
    }
  }
`

const MyComponentWithData = graphql(TodoesQuery)(graphql(TestsQuery)(TestApp))

const TestAppLinked = connect(
  (state) => ({ filter: state.filter }),
  (dispatch) => ({
    setFilter (filter) {
      dispatch({
        type: 'SET_FILTER',
        filter,
      })
    },
  }),
)(MyComponentWithData)

export default TestAppLinked
