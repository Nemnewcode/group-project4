import React, { useState, useEffect } from 'react';
  import SearchBar from '../components/SearchBar';
  import StoryList from '../components/StoryList';
  import stories from '../data/stories';

  const Home = () => {
    const [storiesData, setStoriesData] = useState([]);
    const [filteredStories, setFilteredStories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      if (Array.isArray(stories)) {
        setStoriesData(stories);
        setFilteredStories(stories);
      } else {
        setError('Dữ liệu truyện không hợp lệ.');
      }
      setLoading(false);
    }, []);

    const handleSearch = (query) => {
      const filtered = storiesData.filter((story) =>
        story.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredStories(filtered);
    };

    if (loading) return <div>Đang tải...</div>;
    if (error) return <div>{error}</div>;

    return (
      <div>
        <header className="header">
          <div>
            <SearchBar onSearch={handleSearch} />
          </div>
        </header>
        <StoryList stories={filteredStories} />
      </div>
    );
  };

  export default Home;