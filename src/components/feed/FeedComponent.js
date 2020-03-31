import React, { Component } from 'react';
import { Feed,Label } from 'semantic-ui-react';
import './FeedStyle.css'

class FeedComponent extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {

    return (
      <div className='feedFlex'>
        {this.props.messages.map((message, index) => {
          return (
            <Feed.Event className={message.allignment === 'right' ? 'feedRight' : 'feedLeft'} key={index}> 
              <Label pointing={message.allignment} color={message.allignment === 'right' ? 'green' : 'pink'}>
                <span className='lableStyle' allignment='right' > {message.userName} {new Date(message.date).toLocaleTimeString()} </span> 
                <Feed.Extra className='feedMessage' text content={message.message} />
              </Label>
            </Feed.Event>
          )
        })}
      </div>
    );
  }
}

export default FeedComponent;
