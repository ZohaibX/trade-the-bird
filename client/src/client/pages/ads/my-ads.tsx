import * as React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Axios from 'axios';
import { keys } from '../../../config/keys';
import CustomImageList from '../../components/home/image-list';
import BasicTabs from '../../components/home/text-box';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RequireAuth from '../../components/hocs/require-auth';
import MediaCard from '../../components/home/card';
import Text from '../../components/form/text-field';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { InputAdornment } from '@mui/material';

const MyAds = (props) => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState('');
  const [replies, setReplies] = React.useState([]);
  const [reply, setReply] = React.useState('');
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    const fetchAds = async () => {
      const { data } = await Axios.get(`${keys.BACKEND}/api/ads/get-user-ads`);
      setData(data);
    };
    const fetchComments = async () => {
      const { data } = await Axios.get(`/api/comments/get-user-comments`);
      setComments(data);
    };
    const retrieveData = async () => {
      const { data: repliesData } = await Axios.get(
        '/api/comments/get-all-replies '
      );
      setReplies(repliesData);
    };
    retrieveData();
    fetchAds();
    fetchComments();
  }, []);

  let title;
  if (props.currentUser && props.currentUser.id)
    title = props.currentUser.username;
  else title = 'My Ads';

  const head = () => (
    // Replace --- title must be user's title
    <Helmet>
      <title>{`${title}`}</title>
    </Helmet>
  );

  const deleteReply = async (comment, reply) => {
    try {
      await Axios.delete(
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
      await Axios.post(`/api/comments/vote-reply/${reply.id}`, { number: 1 });
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
      await Axios.delete(`/api/comments/delete-comment/${comment.id}`);
    } catch (error) {
      alert('Something Went Wrong');
      setComments(oldComments);
    }
  };

  const sendReply = async (comment) => {
    console.log('hit me');

    let data;
    try {
      data = await Axios.post(`/api/comments/add-reply/${comment.id}`, {
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

  return (
    <div className="container">
      {head()}

      {data.length ? (
        <h1
          className="my-5 text-center"
          style={{
            fontFamily: 'Alfa Slab One',
            borderBottom: '2px solid black',
            paddingBottom: '2px',
            width: '300px',
            margin: '0 auto',
          }}
        >
          Your Ads
        </h1>
      ) : null}

      <div className="d-flex flex-row justify-content-md-start gap-3 flex-wrap ">
        {data.length &&
          data.map((item) => (
            <MediaCard
              key={item.id}
              imageLink={item.images[0]}
              alt={item.breedName}
              title={item.title}
              birdName={item.birdTitle}
              breedName={item.breedName}
              price={item.price}
              city={item.city}
              link={`/ad-details-${btoa(item.id)}-${btoa(
                item.userId
              )}-details-x`}
            />
          ))}
      </div>

      {comments.length ? (
        <div style={{ width: '100%' }}>
          <h1
            className="my-5 text-center"
            style={{
              fontFamily: 'Alfa Slab One',
              borderBottom: '2px solid black',
              paddingBottom: '2px',
              width: '400px',
              margin: '0 auto',
            }}
          >
            Your Comments
          </h1>

          {comments.map((comment) => (
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
      ) : null}
    </div>
  );
};

function mapStateToProps({ currentUser }) {
  return { currentUser };
}

export default {
  component: connect(mapStateToProps)(RequireAuth(MyAds)),
};
