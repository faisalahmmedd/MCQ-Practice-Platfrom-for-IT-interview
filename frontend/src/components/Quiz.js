import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Quiz.css";

const Quiz = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { categories, count } = location.state || { categories: [], count: 10 };

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [time, setTime] = useState(0);

  // Fetch questions from backend
  useEffect(() => {
    if (!categories || categories.length === 0) return;

    axios
      .post("http://localhost:5000/api/mcq/get-multi-quiz", { categories, count })
      .then((res) => {
        setQuestions(res.data);
        setLoading(false);
        setTime(res.data.length * 30); // 30 sec per question
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [categories, count]);

  // Timer countdown
  useEffect(() => {
    if (time <= 0) return;

    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit(); // Auto-submit when timer ends
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  // Format time mm:ss
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  // Handle option select
  const handleSelect = (qIndex, answer) => {
    setSelectedAnswers((prev) => ({ ...prev, [qIndex]: answer }));
  };

  // Submit quiz
  const handleSubmit = () => {
    const answers = questions.map((q, idx) => ({
      id: q._id,
      category: q.category,
      answer: selectedAnswers[idx] || null,
      
    }));

    axios
      .post("http://localhost:5000/api/mcq/submit-quiz", { answers })
      .then((res) => {
        navigate("/result", { state: { result: res.data, questions } });
      })
      .catch((err) => console.error(err));
  };

  if (loading) return <p className="loading-text">Loading quiz...</p>;
  if (questions.length === 0) return <p className="loading-text">No questions found!</p>;

  return (
    <div className="quiz-container">
      {/* Sticky Timer Bar */}
      <div
        className="timer-bar"
        style={{
          background:
            time > (questions.length * 30) / 2
              ? "#28a745"
              : time > (questions.length * 30) / 4
              ? "#ffc107"
              : "#dc3545",
        }}
      >
        ⏳ Time Left: {formatTime(time)}
      </div>

      <h1 className="quiz-title">Quiz on {categories.join(", ")}</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {questions.map((q, idx) => (
          <div key={idx} className="question-box">
            <h2 className="question-text">
              Q{idx + 1}. {q.question}{" "}
              <span className="category-label">{q.category}</span>
            </h2>
            <div className="options">
              {q.options.map((opt, i) => (
                <label key={i} className="option-label">
                  <input
                    type="radio"
                    name={`q-${idx}`}
                    value={opt}
                    checked={selectedAnswers[idx] === opt}
                    onChange={() => handleSelect(idx, opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        <button type="submit" className="submit-btn">
          Submit Quiz
        </button>
      </form>
    </div>
  );
};

export default Quiz;

