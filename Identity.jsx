import React from 'react';
import './Identity.css'
import Admin_icon from '../img/Admin.png'
import Student_icon from '../img/Student.png'
class ChooseProfile extends React.Component {
  render() {
    return (
      <div>
        <h1>Choose Your Profile</h1>
        <div className="profile" onClick={() => { window.location.href='administrator.html' }}>
          <img src={Admin_icon} alt="Administrator" />
          <h2>Administrator</h2>
        </div>
        <div className="profile" onClick={() => { window.location.href='student.html' }}>
          <img src={Student_icon} alt="Student" />
          <h2>Student</h2>
        </div>
      </div>
    );
  }
}

export default ChooseProfile;
