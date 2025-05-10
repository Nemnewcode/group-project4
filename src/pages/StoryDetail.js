import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import stories from '../data/stories';

const StoryDetail = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [currentChapter, setCurrentChapter] = useState(0);

  useEffect(() => {
    const selectedStory = stories.find((s) => s.id === Number(id));
    if (selectedStory) setStory(selectedStory);
  }, [id]);

  if (!story) return <div>Loading...</div>;

  const handleChapterChange = (e) => {
    setCurrentChapter(Number(e.target.value));
  };

  return (
    <div className="story-detail">
      <div className="story-detail-header">
        <img src={story.cover} alt={story.title} />
        <div className="story-detail-content">
          <h1>{story.title}</h1>
          <p>{story.description}</p>
        </div>
      </div>
      <div className="chapter-list">
        <label htmlFor="chapter-select">Chọn chương: </label>
        <select
          id="chapter-select"
          value={currentChapter}
          onChange={handleChapterChange}
          className="chapter-select"
        >
          {story.chapters.map((_, index) => (
            <option key={index} value={index}>
              Chương {index + 1}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h2 className="chapter-title">Chương {currentChapter + 1}</h2>
        <p className="chapter-content">{story.chapters[currentChapter]}</p>
      </div>
      <div className="nav-buttons">
        <button
          onClick={() => setCurrentChapter((prev) => Math.max(prev - 1, 0))}
          disabled={currentChapter === 0}
        >
          Chương trước
        </button>
        <button
          onClick={() => setCurrentChapter((prev) => Math.min(prev + 1, story.chapters.length - 1))}
          disabled={currentChapter === story.chapters.length - 1}
        >
          Chương sau
        </button>
      </div>
    </div>
  );
};

export default StoryDetail;