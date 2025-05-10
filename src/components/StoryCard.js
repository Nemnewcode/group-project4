import React from 'react';
import { Link } from 'react-router-dom';

const StoryCard = ({ story }) => {
  return (
    <Link to={`/story/${story.id}`} className="story-card">
      <img src={story.cover} alt={story.title} />
      <div className="story-card-content">
        <h3>{story.title}</h3>
        <p>{story.description}</p>
        <p className="story-meta">Thể loại: Ngôn tình | Trạng thái: Đang cập nhật</p>
      </div>
    </Link>
    
  );
};

export default StoryCard;