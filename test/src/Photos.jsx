import * as React from "react";
import superagent from "superagent";

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }
  componentDidMount() {
    superagent
      .get(
        "https://gorest.co.in/public-api/photos?_format=json&access-token=9N9PEdQelLM6JVDd2_5zbRWMV2BFP5XMNaz2"
      )
      .end((err, res) => {
        if (err) {
          console.error(err);
        } else {
          console.log(res);
          this.setState({
            photos: res.body.result
          });
        }
      });
  }

  render() {
    return (
      <div className = "container">
        <h1 style = {{textAlign: "center"}} className="title">Liste photos</h1>
        {this.state.photos.map((item) => {
          return <img className="photos" src={item.url} />;
        })}
      </div>
    );
  }
}

export default Photos;
