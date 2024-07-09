// components/About.js
import React from 'react';
import User from './User';
import UserClass from './UserClass';

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor called")
        
    }

    componentDidMount(){
        
    }

    render() {
        console.log("Parent render called");
        return (
            <div>
                <User name={"Sidharth"} address={"Faridabad"} />
                <UserClass/>
            </div>
        );
    }
}

export default About;
