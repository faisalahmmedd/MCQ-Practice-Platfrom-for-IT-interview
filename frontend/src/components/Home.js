import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  const toggleCategory = (cat) => {
    setCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const startQuiz = () => {
    if (categories.length === 0) {
      alert("Please select at least one category!");
      return;
    }
    navigate("/quiz", { state: { categories, count } }); // ✅ send categories & count via state
  };

  return (
    <div className="home-container">
      <h1>Welcome to Quiz Portal</h1>
      <p className="instructions">
        Select one or more categories and choose the number of questions per category.<br></br>
        Then click "Start Quiz" to begin.
      </p>

      <div className="category-selection">
        {["DSA", "OOP", "DBMS", "OS", "NETWORKING"].map((cat) => (
          <label key={cat} className="category-labels">
            <input
              type="checkbox"
              value={cat}
              checked={categories.includes(cat)}
              onChange={() => toggleCategory(cat)}
            />
            {cat}
          </label>
        ))}
      </div>

      <div className="count-selection">
        <label>Number of questions per category: </label>
        <select value={count} onChange={(e) => setCount(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
      </div>

      <button className="start-btn" onClick={startQuiz}>
        Start Quiz
      </button>
    </div>
  );
};

export default Home;
