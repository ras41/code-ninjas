import React from 'react';
import './StudentForm.css'

function StudentRegistrationForm() {
  return (
    <div>
      <h2>Student Registration Form</h2>
      <form action="#" method="POST">
        <label htmlFor="student_name">Name:</label><br />
        <input type="text" id="student_name" name="student_name" required /><br /><br />
        
        <label htmlFor="roll_number">Roll Number:</label><br />
        <input type="text" id="roll_number" name="roll_number" required /><br /><br />
        
        <label htmlFor="subject">Subject:</label><br />
        <input type="text" id="subject" name="subject" required /><br /><br />
        
        <label htmlFor="gender">Gender:</label><br />
        <select id="gender" name="gender" required>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select><br /><br />
        
        <label htmlFor="phone_number">Phone Number:</label><br />
        <input type="tel" id="phone_number" name="phone_number" pattern="[0-9]{10}" required /><br /><br />
        
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default StudentRegistrationForm;
