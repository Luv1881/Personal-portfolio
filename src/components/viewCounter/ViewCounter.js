import React, {useState, useEffect} from "react";
import "./ViewCounter.scss";

const ViewCounter = () => {
  const [viewCount, setViewCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const apiBase =
      process.env.REACT_APP_VIEWS_API ||
      (process.env.NODE_ENV === "development" ? "http://localhost:3001" : "");

    const fetchViews = async method => {
      const response = await fetch(`${apiBase}/api/views`, {method});
      if (!response.ok) {
        throw new Error(`Unexpected status ${response.status}`);
      }
      const data = await response.json();
      if (typeof data.views === "number") {
        setViewCount(data.views);
      }
    };

    const init = async () => {
      try {
        await fetchViews("POST");
      } catch (error) {
        console.error("Failed to increment view count:", error);
        try {
          await fetchViews("GET");
        } catch (fallbackError) {
          console.error("Failed to fetch existing view count:", fallbackError);
        }
      }
    };

    init();
  }, []);

  if (!showButton) {
    return null;
  }

  return (
    <div className={`view-counter-container ${isOpen ? "expanded" : ""}`}>
      <button
        className="view-counter-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? `Views: ${viewCount}` : "V"}
      </button>
    </div>
  );
};

export default ViewCounter;
