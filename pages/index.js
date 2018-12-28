import React, {Component} from 'react';
import axios from 'axios';
import Error from 'next/error';
import Link from 'next/link';
import '../assets/scss/style.scss';
import Layout from '../components/Layout/Layout';
import StoryList from '../components/StoryList/StoryList';

class Index extends Component {
  static async getInitialProps(context) {
    const {req, res, query} = context;
    let page;
    let stories;

    try {
      page = Number(query.page) || 1;
      const {data} = await axios.get(`https://node-hnapi.herokuapp.com/news?page=${page}`);
      stories = data;
    } catch (error) {
      console.log(error);
      stories = [];
    }

    return {page, stories};
  }

  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => console.log('Service worker registered successfully', registration))
        .catch(error => console.log('Service worker registration failed', error));
    }
  }

  render() {
    const {stories, page} = this.props;
    if (!stories.length) return <Error statusCode={503} />;

    return (
      <Layout title="Hacker Next">
        <StoryList stories={stories}/>

        <div className="text-center mt-4">
          {
            page !== 1
              ? <Link href={`/?page=${page - 1}`}>
                  <a className="btn btn-outline-dark">Prev Page</a>
                </Link>
              : null
          }

          <Link href={`/?page=${page + 1}`}>
            <a className={`btn btn-outline-dark ${page !== 1 ? `ml-4` : null}`}>Next Page</a>
          </Link>
        </div>
      </Layout>
    );
  }
}

export default Index;
