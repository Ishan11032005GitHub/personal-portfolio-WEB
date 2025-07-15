import './ContactMe.css';

export default function ContactMe() {
  return (
    <div className="container">
      <div className="details">
        <h1>
          CONTACT <span className="highlight">ME HERE</span>
        </h1>
        <p className="description">
          Contact me for any project, collaboration, hackathon, internship, freelancing, or job opportunity.
        </p>
        <div className="NameNEmail">
          <table>
            <tbody>
              <tr><td className="label">Name:</td><td>Ishan Tiwari</td></tr>
              <tr><td className="label">Email:</td><td>ishan11032005@gmail.com</td></tr>
              <tr><td className="label">Phone Number:</td><td>+91 9038819333</td></tr>
            </tbody>
          </table>
        </div>

        <div className="icons">
          <a href="https://www.linkedin.com/in/ishan-tiwari-69b5a732a/" className="socials">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/your-username" className="socials">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://leetcode.com/Ishan_LeetCode" className="socials">LC</a>
          <a href="https://www.geeksforgeeks.org/user/ishan11hkme/" className="socials">GfG</a>
        </div>
      </div>
    </div>
  );
}
