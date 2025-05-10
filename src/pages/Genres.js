import React, { useState, useEffect } from 'react';
  import stories from '../data/stories';

  const Genres = () => {
    const [selectedGenre, setSelectedGenre] = useState('Tất cả');
    const [filteredStories, setFilteredStories] = useState([]);

    useEffect(() => {
      // Thêm thuộc tính genre vào dữ liệu nếu chưa có
      const storiesWithGenre = stories.map(story => ({
        ...story,
        genre: story.title.includes('Ngôn Tình') ? 'Ngôn Tình' :
               story.title.includes('Tiên Hiệp') ? 'Tiên Hiệp' :
               story.title.includes('Kiếm Hiệp') ? 'Kiếm Hiệp' : 'Khác'
      }));

      if (selectedGenre === 'Tất cả') {
        setFilteredStories(storiesWithGenre);
      } else {
        setFilteredStories(storiesWithGenre.filter(story => story.genre === selectedGenre));
      }
    }, [selectedGenre]);

    return (
      <div className="genres-page">
        <h2>Thể loại</h2>
        <div className="genre-filter">
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="genre-select"
          >
            <option value="Tất cả">Tất cả</option>
            <option value="Ngôn Tình">Ngôn Tình</option>
            <option value="Tiên Hiệp">Tiên Hiệp</option>
            <option value="Kiếm Hiệp">Kiếm Hiệp</option>
            <option value="Khác">Khác</option>
          </select>
        </div>
        <div className="story-list">
          {filteredStories.map(story => (
            <div key={story.id} className="story-card">
              <img src={story.cover} alt={story.title} />
              <div className="story-card-content">
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <p>Thể loại: {story.genre}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Genres;