// import { Link } from "react-router-dom";
import SENSE from "../../assets/sense.png";
import ALIGN from "../../assets/align.png";
import GOVERN from "../../assets/govern.png";
import ELEVATE from "../../assets/elevate.png";
import FrameworkofGrowthInfographic from "../../assets/FrameworkofGrowthInfographic.png";
import "./Approach.scss";
function Approach() {
  return (
    <section id="approach">
      <div className="my-fluid-container box1">
        <div className="container">
          <div className="hero">
            <h1 className="Data-200-64-64">Ancient Wisdom Meets Modern Data</h1>
            <p className="sub-head-22-30">By integrating holistic approach, organizational psychology, and advanced data architecture, we help enterprises move beyond fragmented growth into a state of total alignment.</p>
            
          </div>

          
        </div>
        
      </div>
    
      <div className="container box2">
        <div className="approach_box">
          <h5 className="Data-700-18-24">Our Approach</h5>
          <div className="seprator120"></div>
          
        </div>
        <div className="hero2">
                <h2 className="Data-800-72-90">SAGE<span className="Data-800-10-10">TM </span><span className="Data-300-72-70"> philosophy</span></h2>
                <p className="Data-300-40-50">a continuous cycle of organizational evolution designed for large scale transformation and growth</p>
        </div>
        <div className="iconsbox">
          <div className="iconbox">
            <img src={SENSE} alt="CXO Advisory" />
            <h5 classname="Data-800-24-24">SENSE</h5>
            <p className="body-16-24">Intellectual Awareness We begin by capturing the "truth" of the organization. This involves deep-dive data discovery and sensing the cultural pulse. We identify the hidden silos and friction points that traditional audits miss.</p>
          </div>

            <div className="iconbox">
              <img src={ALIGN} alt="CXO Advisory" />
              <h5 classname="Data-800-24-24">ALIGN</h5>
              <p classname="body-16-24">Strategic Harmony Inspired by the concept of Yoga (union), we synchronize your people, processes, and systems. We ensure that your data architecture supports your leadership’s vision and that your culture is ready for the technical shifts ahead.</p>
            </div>

          <div className="iconbox">
            <img src={GOVERN} alt="CXO Advisory" />
            <h5 classname="Data-800-24-24">GOVERN</h5>
            <p classname="body-16-24">Structural Integrity Governance isn't just about compliance; it’s about flow. We build the "Digital Nervous System" of your company—establishing clean data protocols and behavioral guardrails that ensure your systems remain scalable and secure.</p>
          </div>

          <div className="iconbox">
            <img src={ELEVATE} alt="CXO Advisory" />
            <h5 classname="Data-800-24-24">ELEVATE</h5>
            <p classname="body-16-24">Conscious Evolution With a stable foundation in place, we move toward high-performance outcomes. Whether it’s AI adoption or post-merger synergy, we elevate the organization into a state of "AI Readiness" and peak leadership alignment.</p>
          </div>

        </div>
      </div>

      <div className="my-fluid-container Framework">
        <h3 className="Data-200-64-80">Framework of Growth</h3>
        <img src={FrameworkofGrowthInfographic} alt="Framework of Growth Infographic" />
      </div>

      <div className="my-fluid-container Datalifecycle">
        <h3 className="Data-200-64-80">Our capabilities in the Data Lifecycle</h3>
        
      </div>

    </section>
  )
}

export default Approach