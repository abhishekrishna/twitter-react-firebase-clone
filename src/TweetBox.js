import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react';
import db from './firebase';
import "./TweetBox.css";

//Send or post tweet function

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

//Add to the firebase database collection

        db.collection('posts').add({
            displayName: 'Komal Bhati',
            username: "tanvibti",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://scontent-del1-1.cdninstagram.com/v/t51.2885-19/s150x150/119186213_242293073773909_7693435328617678797_n.jpg?_nc_ht=scontent-del1-1.cdninstagram.com&_nc_ohc=Zfl4ef0Rhl4AX9SIGm7&oh=d9f2482d9fd295ca00d577d04cf70747&oe=5FA30B63"
        });

//Nulls the Tweet after Posting

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                <Avatar src="https://scontent-del1-1.cdninstagram.com/v/t51.2885-19/s150x150/90354884_634489317330392_1404092910063845376_n.jpg?_nc_ht=scontent-del1-1.cdninstagram.com&_nc_ohc=vcSjOihE-qAAX9rvwju&oh=ecd7261cd9812ae376a373f51682da77&oe=5FA33F21"/>
                <input
                    onChange={(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage}
                    placeholder="What's happening?"
                    type="text"
                  />
                </div>
                <input
                  value={tweetImage}
                  onChange={(e) => setTweetImage(e.target.value)}
                  className="tweetBox__imageInput"
                  placeholder="Optional: Enter image URL"
                  type="text"
                />
        
                <Button
                  onClick={sendTweet}
                  type="submit"
                  className="tweetBox__tweetButton"
                >
                  Tweet
                </Button>
              </form>
            
        </div>
    )
}

export default TweetBox
