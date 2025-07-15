import './Education.css';

export default function Education() {
  const educationData = [
    {
      iconClass: "fa-solid fa-graduation-cap",
      institute: "Indian Institute of Information Technology, Guwahati (IIITG)",
      location: "Guwahati, Assam",
      degree: "B.Tech – Computer Science and Engineering",
      year: "2023-present"
    },
    {
      iconClass: "fa-solid fa-school",
      institute: "Delhi Public School, Ruby Park, Kolkata",
      location: "Kolkata, West Bengal",
      degree: "Class 12th",
      year: "2022-2023"
    },
    {
      iconClass: "fa-solid fa-school",
      institute: "Delhi Public School, Ruby Park, Kolkata",
      location: "Kolkata, West Bengal",
      degree: "Class 10th",
      year: "2020-2021"
    }
  ];

  return (
    <div className="educationHistory">
      {educationData.map((edu, idx) => (
        <div key={idx} className="institute">
          <div>
            <h5>
              <i className={edu.iconClass}></i>
              {edu.institute}
            </h5>
            <i className="location">{edu.location}</i><br />
            <span className="degree">{edu.degree}</span>
          </div>
          <div className="year">{edu.year}</div>
        </div>
      ))}
    </div>
  );
}
