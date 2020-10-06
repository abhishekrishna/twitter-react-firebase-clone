import { Avatar, Button } from '@material-ui/core'
import React from 'react';
import "./TweetBox.css";


function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                <Avatar src="https://scontent-del1-1.cdninstagram.com/v/t51.2885-19/s150x150/90354884_634489317330392_1404092910063845376_n.jpg?_nc_ht=scontent-del1-1.cdninstagram.com&_nc_ohc=vcSjOihE-qAAX9rvwju&oh=ecd7261cd9812ae376a373f51682da77&oe=5FA33F21"/>
                <input placeholder="What's Happening?" type="text" ></input>
                </div>
                <input
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter Image URL"
                    type="text"
                    />
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
            
        </div>
    )
}

export default TweetBox
