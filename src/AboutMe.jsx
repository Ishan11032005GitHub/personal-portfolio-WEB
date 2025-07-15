import GfG from "./icons8-geeksforgeeks-48.png";
import ICON from './icons8-leetcode-24.png';
import { useEffect, useState } from 'react';
import './Accomplishments.css'
export default function AboutMe() {
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    const duration = 2000; // total time: 1 second
    const target = 150;    // target value
    const steps = 150;      // number of updates
    const increment = 1;
    const intervalTime = duration / steps;

    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount1(target);
        clearInterval(interval);
      } else {
        setCount1(Math.round(current));
      }
    }, intervalTime);
return () => clearInterval(interval); // cleanup on unmount
  }, []);
  
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    const duration = 2000; // total time: 1 second
    const target = 200;    // target value
    const steps = 200;      // number of updates
    const increment = 1;
    const intervalTime = duration / steps;

    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount2(target);
        clearInterval(interval);
      } else {
        setCount2(Math.round(current));
      }
    }, intervalTime);
return () => clearInterval(interval); // cleanup on unmount
  }, []);
return (
    <>
    <div className="FLEXBOX" style={{width:"100%",display:"flex"}}>
      <div className='AboutMyself' style={{width:"50%",marginTop:"2vh"}}>
      <h2 style={{fontSize:"2em"}}>ABOUT <span style={{color:"#F79B72"}}>MYSELF</span></h2>
      <p style={{fontSize:"1em",textAlign:"left"}}>Hello everyone, I'm Ishan Tiwari, a pre-final year B. Tech Computer Science and Engineering student at Indian Institute of Information Technology, Guwahati. <br /> I'm into Full-Stack Web development, Machine Learning and Databases.</p>
      </div>
      <div className='BLOCKS' style={{width:"50%",display:"flex",marginLeft:"10vw"}}>
        <div className='BLOCKELEMENTS' style={{width:"30%",border:"2px solid gray",fontSize:"22.5px",backgroundColor:"#2A4759",color:"#EEEEEE"}}>
          200+ Problems Solved on LeetCode <br />
          <img src={ICON} alt="LeetCode Icon" />
        </div>
        <div className='BLOCKELEMENTS' style={{width:"30%",marginLeft:"2vw",fontSize:"22.5px",border:"2px solid gray",backgroundColor:"#2A4759",color:"#EEEEEE"}}>
          100+ Score on <span>Geeks for Geeks</span><br />
          <img src={GfG} alt="LeetCode Icon" />
        </div>
      </div>
    </div>
    <div className="Skills&Cretifications" style={{display:"flex",marginTop:"3.5vh"}}>
    <div className="Tech" style={{width:"50%"}}>
      <b>TECHNICAL <span style={{color:"#F79B72"}}>SKILLS</span></b>
      <ul style={{listStyle:"none",textAlign:"left"}}>
        <li><b>Programming Languages:</b> C, C++, Java, Python, JavaScript</li>
        <li><b>Web Development:</b> HTML5, CSS3, React.js </li>
        <li><b>Databases:</b> MySQL, JDBC, MongoDB</li>
        <li><b>Core CS Subjects:</b> Data Structures, Algorithms, Operating Systems (OS), Artificial Intelligence (AI)<br />, Database Management Systems (DBMS), Object-Oriented Programming (OOP)</li>
        <li><b>Version Control:</b> Git, GitHub</li>
      </ul>
    </div>
    <div className="Soft" style={{width:"50%",marginLeft:"5vw"}}>
      <b>SOFT <span style={{color:"#F79B72"}}>SKILLS</span></b>
      <ul style={{listStyle:"none",textAlign:"center"}}>
      <li style={{textAlign:"left",paddingLeft:"7.5vw"}}>Problem Solving</li>
        <li style={{textAlign:"left",paddingLeft:"7.5vw"}}>Team work</li>
        <li style={{textAlign:"left",paddingLeft:"7.5vw"}}>Creativity</li>
        <li style={{textAlign:"left",paddingLeft:"7.5vw"}}>Leadership</li>
        <li style={{textAlign:"left",paddingLeft:"7.5vw"}}>Communication</li>
        </ul>
    </div>
    </div>
    <div className="POR" style={{textAlign:"center"}}>
      <h3>POSITION OF <span style={{color:"#F79B72"}}>RESPONSIBILITY</span></h3>
      <ol>
        <li style={{textAlign:"left"}}>Member, Technical Team - Innovation & Entrepreneurship Cell (I&E Cell), IIITG <br /><i>Jan 2024 – Present</i></li>
        <li style={{textAlign:"left"}}>Member, Technical Team – INIZIO 2025 <br /><i>Jan 2025 - Mar 2025</i></li>
      </ol>
    </div>
    </>
  );
}
