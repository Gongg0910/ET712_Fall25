import React from "react";
import './App.css';
const Modalwindow = function(){
    // function to close the modal window 
    const closemodalwindow = ()=>{
        const modalwindow = document.querySelector(".modalWindow")
        modalwindow.style.display = "none"
    }

    return(
        <>
            {/* modal window */}
            <section className="modalWindow">
                <div className="modalcontent">
                    <header className="modalheader">
                        <p>Add Feedback</p>
                        <p className="closemodal" onClick={closemodalwindow}>&#x58;</p>
                    </header>

                    <main className="modalbody">
                        <input className="commentarea" type="text" placeholder="Type your comments..."/>
                        {/* <p className="description_comment">Max 200 characters</p> */}
                        <button className="btnpostfeedback">Post Feedback</button>
                    </main>
                </div>
            </section>
        </>
)
}
export default Modalwindow