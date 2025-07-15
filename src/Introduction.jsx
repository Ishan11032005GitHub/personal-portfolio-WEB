import TypewriterEffect from './TypeWriter';
import HireMe from './HireMe';
import IMG from './Ishan_Tiwari_Photo.jpg';
import './Introduction.css';
export default function Introduction(){
    return (
        <div className='Intro'>
            <div className='Image'>
                <img src={IMG} width={"100%"} height={"100%"} className='ImageInternal'/>
            </div>
            <div className='Description'>
                <span className='openingLine'>Hello, <br />This is <span style={{color:"#F79B72"}}>Ishan Tiwari</span></span> <br />
                <TypewriterEffect></TypewriterEffect>
                <p className='Sent'>B.Tech student at IIITG</p>
                <HireMe />
            </div>
        </div>
    );
}