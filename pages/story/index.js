import React, {Component} from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import CommentsList from '../../components/CommentsList/CommentsList';
import Error from 'next/error';
import './Story.scss';

class Story extends Component {
  static async getInitialProps({req, res, query}) {
    let story;

    try {
      const storyId = query.id;
      const {data} = await axios.get(`https://node-hnapi.herokuapp.com/item/${storyId}`);
      story = data;
    } catch (error) {
      console.log(error);
      story = null;
    }

    return {story};
  }

  render() {
    const {story} = this.props;
    if (!story) return <Error statusCode={503} />;

    return (
      <Layout title={story.title} backButton={true}>
        <main>
          <h1 className="main__title">
            <a
              className="main__link"
              href={story.url}
              target="_blank"
            >
              {story.title}</a>
          </h1>

          <div className="main__details">
            <strong>{story.points} points</strong>
            <strong>{story.comments_count} comments</strong>
            <strong>{story.time_ago}</strong>
          </div>

          {
            story.comments
              ? (<CommentsList comments={story.comments}/>)
              : (<div>No comments for this story yet.</div>)
          }
        </main>
      </Layout>
    );
  }
}

export default Story;
