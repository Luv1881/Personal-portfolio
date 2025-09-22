import React, { useState, useEffect } from 'react';
import './ViewCounter.scss';

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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const incrementViewCount = async () => {
      try {
        const response = await fetch('/api/views', { method: 'POST' });
        const data = await response.json();
        setViewCount(data.views);
      } catch (error) {
        console.error('Failed to increment view count:', error);
      }
    };

    incrementViewCount();
  }, []);

  if (!showButton) {
    return null;
  }

  return (
    <div className={`view-counter-container ${isOpen ? 'expanded' : ''}`}>
      <button className="view-counter-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? `Views: ${viewCount}` : 'V'}
      </button>
    </div>
  );
};

export default ViewCounter;
