import * as React from 'react';
import Alert from 'react-bootstrap/Alert';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Text from '../../components/form/text-field';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { InputAdornment } from '@mui/material';
import axios from 'axios';
import { fetchCurrentUser } from '../../Store/actions/index';
import { connect } from 'react-redux';
import { keys } from '../../../config/keys';

const Comments = (props) => {
  const [comments, setComments] = React.useState([]);
  const [replies, setReplies] = React.useState([]);
  const [reply, setReply] = React.useState('');
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    const retrieveData = async () => {
      const { data } = await axios.get(
        `${keys.BACKEND}/api/comments/get-all-comments`
      );
      const { data: repliesData } = await axios.get(
        `${keys.BACKEND}/api/comments/get-all-replies`
      );
      setComments(data.reverse());
      setReplies(repliesData);
    };
    retrieveData();
    props.fetchCurrentUser();
  }, []);

  //? This function is for SEO
  const head = () => (
    <Helmet>
      <title>{`Query Hub`}</title>
    </Helmet>
  );

  const deleteReply = async (comment, reply) => {
    try {
      await axios.delete(
        `/api/comments/delete-reply/${comment.id}/${reply.id}`
      );
    } catch (error) {
      alert('Something Went Wrong');
    }

    const myReplies = [...replies];
    const myComments = [...comments];

    console.log(myComments, myReplies, comment, reply);

    myComments.find((item) => {
      if (item.id === comment.id) {
        const index = item.replies.indexOf(reply.id);
        console.log(index);
        item.replies.splice(index, 1);
      }
    });

    const index = myReplies.indexOf(reply);
    console.log(index);
    myReplies.splice(index, 1);

    setComments(myComments);
    setReplies(myReplies);
  };

  const voteReply = async (comment, reply) => {
    const allReplies = [...replies];
    allReplies.find((item) => {
      if (item.id === reply.id) {
        item.votes++;
      }
    });
    setReplies(allReplies);

    try {
      await axios.post(`/api/comments/vote-reply/${reply.id}`, { number: 1 });
    } catch (error) {
      alert('You may have voted already');
      const allReplies = [...replies];
      allReplies.find((item) => {
        if (item.id === reply.id) {
          item.votes--;
        }
      });
      setReplies(allReplies);
    }
  };

  const deleteComment = async (comment) => {
    console.log('hex');

    const oldComments = [...comments];
    const myComments = [...comments];
    const commentDetails = myComments.find((item) => item.id === comment.id);
    const index = myComments.indexOf(commentDetails);
    myComments.splice(index, 1);

    setComments(myComments);

    try {
      await axios.delete(`/api/comments/delete-comment/${comment.id}`);
    } catch (error) {
      alert('Something Went Wrong');
      setComments(oldComments);
    }
  };

  const sendReply = async (comment) => {
    console.log('hit me');

    let data;
    try {
      data = await axios.post(`/api/comments/add-reply/${comment.id}`, {
        description: reply,
      });
    } catch (error) {
      alert('Something went wrong!');
    }

    setReply('');

    const myReplies = [...replies];
    const myComments = [...comments];

    myComments.find((item) => {
      if (item.id === comment.id) {
        console.log(item.replies);
        item.replies.push(data.data.reply.id);
        console.log(item.replies);
      }
    });

    console.log(myReplies);
    myReplies.push(data.data.reply);
    console.log(myReplies);

    setComments(myComments);
    setReplies(myReplies);
  };

  let searchedComments;
  if (search)
    searchedComments = comments.filter((item) =>
      item.title
        .toString()
        .toLowerCase()
        .includes(search.toString().toLowerCase())
    );
  else searchedComments = comments;

  return (
    <div className="comments-section container">
      {head()}

      <Link
        style={{ textDecoration: 'none', color: 'black' }}
        to="/add-your-query"
      >
        <h5
          className="text-center mb-4"
          style={{
            fontFamily: 'Alfa Slab One',
            textDecoration: 'underline',
            cursor: 'pointer',
            color: 'black',
          }}
        >
          Submit Your Query
        </h5>
      </Link>

      <div className="search-comments">
        <Text
          label="Search by Query Title ... "
          value={search}
          setValue={setSearch}
        />
      </div>

      {!searchedComments.length && (
        <h6 className="my-5 text-center" style={{ fontWeight: 'bolder' }}>
          No Comments Found ...{' '}
        </h6>
      )}

      {searchedComments.map((comment) => (
        <Accordion
          className="query"
          key={comment.id}
          style={{ fontFamily: 'Open Sans' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            {/* should be in map function -- get all comments all replies from backend -- 
            then for every comment -- find its replies 
          */}
            <Typography>
              {/*  title must be short -- 50-60 */}
              <h5
                style={{ color: '#0000CD', width: '60%', margin: '0 auto' }}
                className="query-h5"
              >
                {' '}
                {comment.title}{' '}
              </h5>
              <div className="query-bird-details">
                <h6>{comment.birdTitle}</h6>
                <h6>{comment.breedName}</h6>
              </div>
              <h6 className="query-user-info">{comment.userTitle}</h6>
              <p className="query-paragraph"> {comment.description} </p>
              {props.currentUser.id === comment.userId ||
              props.currentUser.role === 'Admin' ? (
                <div className="query-reply-buttons">
                  {/* should only appear for user and admin */}
                  <p onClick={() => deleteComment(comment)}>delete</p>
                </div>
              ) : null}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {!comment.replies.length && (
              <p
                style={{
                  fontWeight: 'bolder',
                  textAlign: 'center',
                }}
              >
                No Reply on this Query...
              </p>
            )}
            {comment.replies.map((item) => {
              const reply = replies.find((reply) => reply.id === item);

              if (reply) {
                return (
                  <Typography key={reply.id}>
                    <p className="query-reply">
                      <span style={{ fontWeight: 'bolder' }}>
                        {reply.userTitle}
                      </span>
                      : {reply.description}
                    </p>
                    <div className="query-reply-buttons">
                      {/* votes button should work only for once 
                    update votes here -- and then in backend 
                  */}
                      <p onClick={() => voteReply(comment, reply)}>
                        votes: {reply.votes}
                      </p>
                      {/* should only appear for user and admin */}
                      {props.currentUser.id === reply.userId ||
                      props.currentUser.role === 'Admin' ? (
                        <p onClick={() => deleteReply(comment, reply)}>
                          delete
                        </p>
                      ) : null}
                    </div>
                  </Typography>
                );
              }
            })}
            <TextField
              id="standard-basic"
              className="send-reply"
              value={reply}
              onChange={(e) => setReply(e.currentTarget.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SendIcon
                      onClick={() => sendReply(comment)}
                      className="send-icon"
                    />
                  </InputAdornment>
                ),
              }}
              label="Reply"
              variant="standard"
            />
          </AccordionDetails>
        </Accordion>
      ))}
      <br />
      <br />
      <br />
    </div>
  );
};

function mapStateToProps({ currentUser }) {
  return { currentUser };
}

export default {
  component: connect(mapStateToProps, { fetchCurrentUser })(Comments),
};
