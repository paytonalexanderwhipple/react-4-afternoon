import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Student extends Component {
  constructor() {
    super()

    this.state = {
      studentInfo: {},
    }
  }

  componentDidMount = () => {
    let promise = axios.get(`http://localhost:3005/students/${this.props.match.params.id}`)
    promise.then(res => {
      this.setState({studentInfo: res.data})
    })
  }

  render() {
    return (
      <div className="box">
        <Link to={`/classlist/${this.state.studentInfo.class}`}><button>Back to Classlist</button></Link>
        <h1>Student</h1>
        <h1>{`${this.state.studentInfo.first_name} ${this.state.studentInfo.last_name}`}</h1>
        Grade: <h3>{this.state.studentInfo.grade}</h3>
        Email: <h3>{this.state.studentInfo.email}</h3>
      </div>
    )
  }
}