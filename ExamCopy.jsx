import React from 'react';
import './ExamCopy.css'; 

function YourComponent() {
  return (
    <div className="container">
      <h1>Exam</h1>
        <video controls>
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      {/* Your component JSX here */}
    </div>
  );
}

export default YourComponent;
