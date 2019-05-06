import * as React from "react";
import superagent from "superagent";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    superagent
      .get(
        "https://gorest.co.in/public-api/users?_format=json&access-token=9N9PEdQelLM6JVDd2_5zbRWMV2BFP5XMNaz2"
      )
      .end((err, res) => {
        if (err) {
          console.error(err);
        } else {
          console.log(res);
          this.setState({
            users: res.body.result
          });
        }
      });
  }

  render() {
    return (
      <div>
        <h1>Liste users</h1>
        {this.state.users.map((user) => {
          return <div>{user.email}</div>;
        })}
      </div>
    );
  }
}

export default Users;
