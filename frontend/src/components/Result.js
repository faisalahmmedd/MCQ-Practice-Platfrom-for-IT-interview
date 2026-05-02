import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Result.css";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { result, questions } = location.state || {};

  // Calculate per-category stats only if result exists
  const categoryStats = {};
  let totalCorrect = 0;

  if (result && questions) {
    questions.forEach((q, idx) => {
      const userAns = result.answers ? result.answers[idx]?.answer : null;
      if (!categoryStats[q.category]) {
        categoryStats[q.category] = { total: 0, correct: 0 };
      }
      categoryStats[q.category].total += 1;
      if (userAns && userAns === q.correctAnswer)
        categoryStats[q.category].correct += 1;
    });

    totalCorrect = questions.reduce((acc, q, idx) => {
      const userAns = result.answers ? result.answers[idx]?.answer : null;
      return userAns === q.correctAnswer ? acc + 1 : acc;
    }, 0);
  }

  // ✅ Save result to backend only if user is logged in AND result exists
  useEffect(() => {
    const saveResult = async () => {
      const token = localStorage.getItem("token"); // login er pore save thake

      if (!token || !result || !questions) return; // guest user or no result → skip

      const categoryStatsArray = Object.keys(categoryStats).map((cat) => ({
        category: cat,
        correct: categoryStats[cat].correct,
        total: categoryStats[cat].total,
      }));

      try {
        await axios.post(
          "http://localhost:5000/api/results/save",
          {
            totalScore: totalCorrect,
            totalQuestions: questions.length,
            categoryStats: categoryStatsArray,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log("✅ Result saved to backend!");
      } catch (err) {
        console.error("❌ Error saving result:", err);
      }
    };

    saveResult();
  }, [categoryStats, totalCorrect, questions, result]);

  if (!result || !questions) {
    return <p>No result data found!</p>;
  }

  return (
    <div className="result-container">
      <h1>Quiz Result</h1>

      <div className="score-summary">
        <h2>
          Total Score: {totalCorrect} / {questions.length}
        </h2>
        <div className="category-summary">
          {Object.keys(categoryStats).map((cat) => (
            <p key={cat}>
              {cat}: {categoryStats[cat].correct} / {categoryStats[cat].total}{" "}
              correct
            </p>
          ))}
        </div>
      </div>

      <hr />

      <div className="questions-review">
        {questions.map((q, idx) => {
          const userAns = result.answers ? result.answers[idx]?.answer : null;
          const isCorrect = userAns === q.correctAnswer;
          const isUnattempted = !userAns;

          return (
            <div key={idx} className="question-box">
              <h3>
                Q{idx + 1}. {q.question}{" "}
                <span className="category-label">{q.category}</span>
              </h3>
              <div
                className={`answer-status ${
                  isCorrect
                    ? "correct"
                    : isUnattempted
                    ? "unattempted"
                    : "wrong"
                }`}
              >
                {isCorrect
                  ? "✅ Correct"
                  : isUnattempted
                  ? "⚪ Unattempted"
                  : "❌ Wrong"}
              </div>

              <div className="answers">
                <p>
                  <strong>Your Answer:</strong> {userAns || "Not answered"}
                </p>
                {!isCorrect && (
                  <p>
                    <strong>Correct Answer:</strong> {q.correctAnswer}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <button className="home-btn" onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
};

export default Result;
