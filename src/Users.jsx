import * as React from "react"
import request from 'request'


class Users extends React.Component {

    componentDidMount () {
        request("https://gorest.co.in/public-api/users?_format=json&access-token=9N9PEdQelLM6JVDd2_5zbRWMV2BFP5XMNaz2",
            (error, response, body) => {
                console.log('error', error);
                console.log('statusCode', response);
                console.log('body', body);
               
            })
    }

    render() {
        return (
            <div><h1>Liste users</h1></div>
        );
    }
}

export default Users;