import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import "./Profile.css";

const categories = ["DSA", "OOP", "DBMS", "OS", "NETWORKING", "BEHAVIORAL"];

const Profile = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categorySummary, setCategorySummary] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get("http://localhost:5000/api/results/my-results", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setResults(res.data);

        const summary = categories.map((cat) => {
          let totalQuestions = 0;
          let correct = 0;

          res.data.forEach((attempt) => {
            const catStat = attempt.categoryStats.find((c) => c.category === cat);
            if (catStat) {
              totalQuestions += catStat.total;
              correct += catStat.correct;
            }
          });

          const accuracy = totalQuestions ? Math.round((correct / totalQuestions) * 100) : 0;

          let feedback = "";
          if (accuracy === 0) feedback = "Not attempted";
          else if (accuracy < 60) feedback = "Weak – Need more practice";
          else if (accuracy < 80) feedback = "Good – Keep improving";
          else feedback = "Excellent – Great job!";

          return { category: cat, totalQuestions, correct, wrong: totalQuestions - correct, accuracy, feedback };
        });

        setCategorySummary(summary);
      } catch (err) {
        console.error("Error fetching results:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  if (loading) return <p>Loading your results...</p>;
  if (!results.length) return <p className="no-results">No previous results found!</p>;

  const feedbackColor = (feedback) => {
    if (feedback.includes("Weak")) return "#dc3545";
    if (feedback.includes("Good")) return "#ffc107";
    if (feedback.includes("Excellent")) return "#28a745";
    return "#888"; // Not attempted
  };

  return (
    <div className="profile-container">
      <h1>Category-wise Summary</h1>
      {categorySummary.map((cat, idx) => (
        <div key={idx} className="category-card">
          <h2>{cat.category}</h2>
          {cat.totalQuestions === 0 ? (
            <p className="feedback" style={{ color: feedbackColor(cat.feedback) }}>{cat.feedback}</p>
          ) : (
            <>
              <p>
                Accuracy: {cat.correct} / {cat.totalQuestions} correct ({cat.accuracy}%)
              </p>
              <p className="feedback" style={{ color: feedbackColor(cat.feedback) }}>{cat.feedback}</p>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={[{ name: cat.category, Correct: cat.correct, Wrong: cat.wrong }]}>
                  <XAxis dataKey="name" />
                  <YAxis allowDecimals={false} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#f9f9f9", borderRadius: "8px", padding: "10px", border: "1px solid #ccc" }}
                    formatter={(value, name) => [value, name]}
                  />
                  <Legend />
                  <Bar dataKey="Correct" fill="#28a745">
                    <Cell key="correct" fill="#28a745" />
                  </Bar>
                  <Bar dataKey="Wrong" fill="#dc3545">
                    <Cell key="wrong" fill="#dc3545" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </>
          )}
        </div>
      ))}

      <h1>Attempt History</h1>
      {results.map((res, index) => (
        <div key={res._id} className="result-card">
          <h2>Attempt {index + 1}</h2>
          <p>
            <strong>Date:</strong> {new Date(res.date).toLocaleString()}
          </p>
          <p>
            <strong>Total Score:</strong> {res.totalScore} / {res.totalQuestions}
          </p>
          <h3>Category Breakdown:</h3>
          <ul>
            {res.categoryStats.map((catStat, i) => (
              <li key={i}>
                {catStat.category}: {catStat.correct} / {catStat.total} correct
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Profile;
