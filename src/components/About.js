// components/About.js
import React from 'react';
import User from './User';
import UserClass from './UserClass';

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor called");
    }

    componentDidMount() {
        console.log("Parent componentDidMount called");
    }

    render() {
        console.log("Parent render called");
        return (
            <div className='flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500'>
                <div className='bg-white shadow-lg rounded-lg p-8 m-8 max-w-4xl'>
                    <h1 className='text-4xl font-bold mb-6 text-center text-gray-800'>About Me</h1>
                    <div className='flex flex-col items-center'>
                        <User name={"Sidharth"} address={"Faridabad"} />
                        <UserClass />
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
