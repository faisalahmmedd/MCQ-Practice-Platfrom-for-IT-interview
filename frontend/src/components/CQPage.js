import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./CQPage.css";

const CQPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // ✅ Load questions when category changes
    if (category) {
      setLoading(true);
      axios
        .get(`http://localhost:5000/api/cq/get/${category}`)
        .then((res) => {
          setQuestions(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }

    
  }, [category]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="cq-container">
      {/* Conditionally show buttons for DBMS */}
      {category === "DBMS" && (
        <div className="dbms-buttons-container">
          {/* Top row */}
          <div className="dbms-top-row">
            <button
              className="practice-sql-btn"
              onClick={() =>
                window.open("https://www.w3schools.com/sql/", "_blank")
              }
            >
              Learn MySQL
            </button>

            <button
              className="practice-sql-btn"
              onClick={() =>
                window.open("https://www.w3schools.com/mongodb/", "_blank")
              }
            >
              Learn MongoDB
            </button>
          </div>

          {/* Second row */}
          <div className="dbms-second-row">
            <button
              className="practice-sql-btn"
              onClick={() =>
                window.open(
                  "https://leetcode.com/studyplan/top-sql-50/",
                  "_blank"
                )
              }
            >
              Practice SQL TOP 50 Questions
            </button>
          </div>
        </div>
      )}
      {category === "DSA" && (
        <div className="dsa-buttons-row">
          <button
            className="practice-dsa-btn right-btn"
            onClick={() =>
              window.open(
                "https://leetcode.com/studyplan/top-interview-150/",
                "_blank"
              )
            }
          >
            Top 150 Interview DSA Problems
          </button>

          <button
            className="practice-dsa-btn left-btn"
            onClick={() =>
              window.open(
                "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems",
                "_blank"
              )
            }
          >
            More DSA Interview Problems
          </button>
        </div>
      )}

      {category === "OOP" && (
        <div className="oop-video-btn-container">
          <button
            className="oop-video-btn"
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=mlIUKyZIUUU&t",
                "_blank"
              )
            }
          >
            Watch OOP One-Shot Video
          </button>
        </div>
      )}

      {category === "OS" && (
        <div className="oop-video-btn-container">
          <button
            className="oop-video-btn"
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=8XBtAjKwCm4&t",
                "_blank"
              )
            }
          >
            Watch OS One-Shot Video
          </button>
        </div>
      )}

      {category === "NETWORKING" && (
        <div className="oop-video-btn-container">
          <button
            className="oop-video-btn"
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=IPvYjXCsTg8&t",
                "_blank"
              )
            }
          >
            Watch NETWORKING One-Shot Video
          </button>
        </div>
      )}

      <h2>Top {category} Short Questions</h2>

      {questions.length === 0 ? (
        <p>No questions available.</p>
      ) : (
        <>
          <ul>
            {questions.map((q, idx) => (
              <li key={q._id} className="cq-question">
                <strong>
                  Q{idx + 1}: {q.question}
                </strong>
                <div className="cq-answer">Answer: {q.answer}</div>
              </li>
            ))}
          </ul>

          {/* Study More button after all questions */}
          <div className="study-more-btn-container mt-4">
            <button
              className="study-more-btn"
              onClick={() => {
                const links = {
                  OOP: "https://www.interviewbit.com/oops-interview-questions/",
                  DBMS: "https://www.interviewbit.com/dbms-interview-questions/?sign_up_medium=ib_article_auth_blocker/",
                  DSA: "https://www.interviewbit.com/data-structure-interview-questions/",
                  NETWORKING:
                    "https://www.interviewbit.com/networking-interview-questions/",
                  OS: "https://www.tpointtech.com/operating-system-interview-questions",
                  BEHAVIORAL:
                    "https://www.interviewbit.com/hr-interview-questions/",
                };

                // Fallback link if category not found
                const url = links[category] || "https://www.interviewbit.com/";
                window.open(url, "_blank");
              }}
            >
              Study More
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CQPage;
