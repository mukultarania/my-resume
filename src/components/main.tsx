import React from "react";
import "./css/About.css";

function Main() {
  return (
    // <div className="main-container">
    //     <div className="main-details-name">
    //       <div className="primary-text">
    //         {" "}
    //         <h1>
    //           Hello, I'm <span className="highlighted-text">Mukul</span>
    //         </h1>
    //         <h5>I'm Backend Developer</h5>
    //         FREELANCER <br />
    //         COMPETITIVE PROGRAMMER <br /> Email: taraniamukul@gmail.com <br />
    //           <button type="button" className="btn btn-light" formAction="http://tiny.cc/mt_likd">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="16"
    //               height="16"
    //               fill="currentColor"
    //               className="bi bi-linkedin"
    //               viewBox="0 0 16 16"
    //             >
    //               <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
    //             </svg>
    //           </button>
    //         <a href="tiny.cc/mt_git">Github</a>
    //       </div>
    //     </div>
    //     <div className="profile-details-role">
    //       {" "}
    //       <p>
    //         A highly motivated individual with a passion for constantly
    //         developing skills and growing professionally. I thrive for
    //         creativity, innovation and aesthetics. I am a fast learner, always
    //         on the lookout for opportunities.
    //       </p>
    //     </div>
    // </div>
    <div id="mmenu_screen" className="container-fluid main_container d-flex">
    <div className="row flex-fill">
        <div className="col-sm-6 h-100">
            <div className="row h-50 border">
                <div className="col-sm-12" id="mmenu_screen--book">
                    Booking
                </div>
            </div>
            <div className="row h-50 border">
                <div className="col-sm-12" id="mmenu_screen--information">
                    Info
                </div>
            </div>
        </div>
        <div className="col-sm-6 mmenu_screen--direktaction flex-fill border">
            Action
        </div>
    </div>
</div>
  );
}

export default Main;