import React from 'react';
import './StoryList.scss';
import Link from 'next/link';

const StoryList = ({ stories }) => {
  return (
    <div className="story-list">
      {stories.map((story, index) => (
        <div
          key={story.id}
          className={`story-list__item story card shadow-sm ${
            index !== stories.length - 1 ? `mb-3` : `mb-0`
          }`}
        >
          <div className="card-body">
            <h2 className="story__title card-title">
              <a
                className="story__link card-link"
                href={story.url}
                target="_blank"
                rel="noopener"
              >
                {story.title}
              </a>
            </h2>

            <div className="story__details">
              <span className="story__points">{story.points || 0} points</span>
              <Link href={`/story?id=${story.id}`}>
                <a className="story__comments card-link">
                  {story.comments_count || 0} comments
                </a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoryList;
