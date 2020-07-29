import React from 'react';

import { connect } from 'react-redux';

export class App extends React.Component {
  render() {
    const presenceData = this.props.onlineUsers.byId[Object.keys(this.props.onlineUsers.byId)];

    const messages = this.props.messages.byId[Object.keys(this.props.messages.byId)] || [];
    const onlineUsers = presenceData ? presenceData.occupants : [];
     
    return (
      <div className="row">
        <div className="column">
          <ul>
            {messages.map(function(message){
              return <li key={ message.timetoken }>{message.message.message} </li>;
            })}
          </ul>
        </div>
        <div className="column">
          <ul>
            {onlineUsers.map(function(user){
              return <li key={ user.uuid }>{user.uuid} </li>;
            })}
          </ul>
        </div>
        <div className="column"></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  onlineUsers: state.onlineUsers
});

const AppContainer = connect(
  mapStateToProps
)(App);

export default AppContainer;