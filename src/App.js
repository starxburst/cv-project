import React, { Component } from "react";
import './App.css';
import uniqid from "uniqid";
import Personal from './components/Personal'
import Education from "./components/Education";

class App extends Component {
  constructor() {
    super();
    this.state = {
      personalInfo: {
        firstName: [],
        lastName:[],
        title:[],
        address:[],
        phoneNo:[],
        email:[],
        description:[]
      },
      educationInfo:[{
        schoolName:'happy',
        degree:'',
        subject:'',
        from:'',
        to:'',
        id: uniqid(),
      }],
    };
    
  }

  handleChange = (e, category, key) => {
    const value = e.target.value;
    
    /*----Personal Information Category*/
    if (category === 'PersonalInfo') {
      this.setState({
        personalInfo: {
          key: value,
        }
      })
      console.log(`${key}:  ${this.state.personalInfo.key}`);
    }

    /*----Education Category*/
    if (category === 'education') {
      const id = e.target.getAttribute('id');
      console.log(id);     
      this.state.educationInfo.map((education) => {
        if (education.id === id) {
          education.key = value;
          console.log(`${key}: ${education.key}`);
        }
      })
    }
  }

  onAddEducation = (e) => {
    const defaultEducation = {
      schoolName:'',
      degree:'',
      subject:'',
      from:'',
      to:'',
      id: uniqid(),
    }
    this.setState({
      educationInfo: this.state.educationInfo.concat(defaultEducation),
    })
  }

  onDeleteEducation = (e) => {
    const id = e.target.getAttribute('id');
    console.log(id);
    this.setState({
      educationInfo: this.state.educationInfo.filter(education => education.id !== id),
    })
  }

  render() {
    const {handleChange, onAddEducation, onDeleteEducation} = this;
    const {educationInfo} = this.state;
    return (
      <div className="App">
        <div className="cv-heading">CV Generator</div>
        <div className="cv-box">
          <div className="cv-container">
            <Personal
              handleChange = {handleChange}/>
            <Education
              handleChange = {handleChange} onAddEducation = {onAddEducation} onDeleteEducation = {onDeleteEducation} educationInfo = {educationInfo}/>
          </div>
          <div className="cv-preview">
            <Personal/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
