import UserContext from "../utils/UserContext";
import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "john",
        surname: "cena"
      }
    };
  }

  async componentDidMount() {
    this.setState({
      userInfo: null
    })
  }

  componentDidUpdate() {

  }

  render () {
    return(
    <div className="p-4 mx-4">
      Footer
      <UserContext.Consumer>
        {(data) => <h1>{data.loggedInUser}</h1>}
      </UserContext.Consumer>
    </div>);
  }
}

export default Footer;