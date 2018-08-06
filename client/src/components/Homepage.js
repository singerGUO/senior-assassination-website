import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import MessageTimeLine from './MessageTimeline';

class Homepage extends Component {
  componentDidMount() {
    document.title = "SHS Senior Assassination";
  }

  render() {
    const { currentUser } = this.props;
    if (!currentUser.isAuthenticated) {
      return (
        <div className="home-hero">
          <h1>Sammamish High School Senior Assassination</h1>
          <h4>Want to get the latest game update?</h4>
          <Link to="/signup" className="btn btn-primary">
            Sign up here
          </Link>
        </div>
      );
    }
    return (
      <div>
        <MessageTimeLine
          profileImageUrl={currentUser.user.profileImageUrl}
          username={currentUser.user.username}
        />
      </div>
    );
  }
};

export default Homepage;
