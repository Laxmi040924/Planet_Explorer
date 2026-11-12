import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const questions = [
    { q: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: 1 },
    { q: "Which is the largest planet?", options: ["Earth", "Jupiter", "Saturn", "Mars"], answer: 1 },
    { q: "Name of our galaxy?", options: ["Andromeda", "Milky Way", "Sombrero", "Whirlpool"], answer: 1 },
    { q: "Which planet has rings?", options: ["Mars", "Venus", "Saturn", "Earth"], answer: 2 },
    { q: "Closest planet to Sun?", options: ["Mercury", "Earth", "Mars", "Venus"], answer: 0 },
    { q: "Blue Planet?", options: ["Earth", "Neptune", "Uranus", "Jupiter"], answer: 0 },
    { q: "Hottest planet?", options: ["Mercury", "Venus", "Mars", "Earth"], answer: 1 },
    { q: "Large red spot?", options: ["Mars", "Jupiter", "Venus", "Earth"], answer: 1 },
    { q: "Farthest planet?", options: ["Saturn", "Uranus", "Neptune", "Jupiter"], answer: 2 },
    { q: "Sun is made of?", options: ["Rock", "Metal", "Gas", "Ice"], answer: 2 }
];

export default function Quiz() {
    //check login
    const loggedIn =localStorage.getItem("loggedInUser");
    //submit api function
    async function submitScore(score) {
        const email = localStorage.getItem("loggedInUser");

        if (!email) return;

        await fetch("http://localhost:8081/api/quiz/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, score })
        });
        localStorage.removeItem("loggedInUser");
    }
  
//if not logged in-show popup
    if (!loggedIn) {
        return (
            <div style={page}>
                <div style={card}>
                    <h2>🔒 Login Required</h2>
                    <p>You must login to attempt the quiz.</p><br />
                    <Link to="/login" style={btn}>Go to Login</Link>
                </div>
            </div>
        );
    }
      
    // useEffect(() => {
    //       localStorage.removeItem("loggedIn");
    //       localStorage.removeItem("loggedInUser");
    // }, []);
   

   
    const [step, setStep] = useState(0);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState(null);
    const [finish, setFinish] = useState(false);

    const current = questions[step];

    function handleNext() {
        if (selected === null) return;
       let newScore=score;
        if (selected === current.answer){newScore=score+1;
             setScore(score + 1);}

        if (step + 1 === questions.length) {
            setFinish(true);
            
            submitScore(newScore);
            
        } else {
            setStep(step + 1);
            setSelected(null);
        }
    }
    function restartQuiz() {
        setScore(0);
        setStep(0);
        setSelected(null);
        setSubmitted(false);
    }
   

    return (
        <div style={page}>
            <div style={card}>

                {!finish ? (
                    <>
                        <h2 style={title}>🚀 Space Quiz</h2>
                        <p style={counter}>Question {step + 1} / {questions.length}</p>

                        <h3>{current.q}</h3>

                        {current.options.map((op, i) => (
                            <div key={i}
                                style={{ ...option, background: selected === i ? "#2563eb" : "rgba(255,255,255,0.1)" }}
                                onClick={() => setSelected(i)}
                            >
                                {op}
                            </div>
                        ))}
                        <br />
                        <button style={btn} onClick={handleNext}>Next</button> <br />
                    </>


                ) : (
                    <>
                        <h2>🎉 Quiz Completed</h2>
                        <h3>Your score {score}/{questions.length}</h3>
                        {score >= 8 && <p>🌟 Space Genius!</p>}
                        {score >= 5 && score < 8 && <p>🚀 Good Job Explorer!</p>}
                        {score < 5 && <p>🌌 Keep Learning, Cadet!</p>}
                        <br />
                        <button style={btn} onClick={restartQuiz}>Retry Quiz</button>
                    </>
                )}

            </div>
        </div>
    );
}

const page = {
    minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center",
    background: "radial-gradient(circle,#0b1d3a,#020617)", color: "white"
};
const card = {
    background: "rgba(255,255,255,0.08)", padding: 30, borderRadius: 16, width: 450,
    textAlign: "center", margin: "0 20px"
};
const option = { padding: 10, borderRadius: 10, marginTop: 10, cursor: "pointer" };
const btn = {
    padding: "10px 15px", background: "#3b82f6", borderRadius: 10,
    color: "white", textDecoration: "none"
};
const title = {
    fontSize: "26px",
    marginBottom: "6px",
    marginRight: "22px",
    color: "#e5eeff"
};

const counter = {
    fontSize: "14px",
    opacity: 0.9,
    marginBottom: "18px"
};
