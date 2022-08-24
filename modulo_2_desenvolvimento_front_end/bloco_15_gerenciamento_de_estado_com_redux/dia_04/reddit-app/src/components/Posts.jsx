import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';

class Posts extends Component {
  render() {
    const { posts, loading } = this.props;
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            {posts.map((post) => {
              const { id, title, url } = post;
              return (
                <div key={id}>
                  <p>{`Title: ${title}`}</p>
                  <a href={url} target="_blanked">LINK</a>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.redditReducer.posts,
  loading: state.redditReducer.loading,
});

export default connect(mapStateToProps)(Posts);
