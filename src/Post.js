import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Define PropTypes to validate props
const Post = ({ post }) => {
    const { id, title, dateTime, body } = post;
    // Handle case where body might be null or undefined
    const postBody = body || '';

    return (
        <article className='post'>
            <Link to={`/post/${Number(id)}`}>  {/* Convert id to a number */}
                <h2>{title}</h2>
                <p className='postDate'>{dateTime}</p>
                <p className='postBody'>
                    {postBody.length <= 25 ? postBody : `${postBody.slice(0, 25)}...`}
                </p>
            </Link>
        </article>
    );
};

// Update PropTypes to reflect that `id` is a number
Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,  // Keep as number if you convert id
        title: PropTypes.string.isRequired,
        dateTime: PropTypes.string.isRequired,
        body: PropTypes.string
    }).isRequired
};

export default Post;
