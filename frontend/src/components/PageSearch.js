import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./PageSearch.css";

const PageSearch = () => {
  const [query, setQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    const container = document.querySelector(".main-content");
    if (!container) return;

    // Remove previous highlights
    const prevHighlights = container.querySelectorAll("mark");
    prevHighlights.forEach(mark => {
      const parent = mark.parentNode;
      parent.replaceChild(document.createTextNode(mark.textContent), mark);
      parent.normalize();
    });

    if (!query) return;

    const regex = new RegExp(`(${query})`, "gi");

    const walk = (node) => {
      if (node.nodeType === 3) {
        const match = node.data.match(regex);
        if (match) {
          const frag = document.createDocumentFragment();
          let lastIndex = 0;
          match.forEach(m => {
            const index = node.data.toLowerCase().indexOf(m.toLowerCase(), lastIndex);
            if (index > lastIndex) {
              frag.appendChild(document.createTextNode(node.data.slice(lastIndex, index)));
            }
            const markEl = document.createElement("mark");
            markEl.textContent = node.data.substr(index, m.length);
            frag.appendChild(markEl);
            lastIndex = index + m.length;
          });
          if (lastIndex < node.data.length) {
            frag.appendChild(document.createTextNode(node.data.slice(lastIndex)));
          }
          node.parentNode.replaceChild(frag, node);
        }
      } else if (node.nodeType === 1 && node.childNodes && !["SCRIPT","STYLE","MARK","IFRAME"].includes(node.tagName)) {
        node.childNodes.forEach(walk);
      }
    };

    container.childNodes.forEach(walk);
  }, [query]);

  // Conditionally render only in JSX
  if (location.pathname === "/quiz") return null;

  return (
    <div className="page-search-container">
      <input
        type="text"
        placeholder="Search on this page..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default PageSearch;
