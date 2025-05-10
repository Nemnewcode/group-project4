import React from 'react';
import StoryCard from './StoryCard';

const StoryList = ({ stories }) => {
  return (
    <div className="story-list">
      {stories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  );
};

export default StoryList;