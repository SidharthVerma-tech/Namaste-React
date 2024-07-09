import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo : {
                login : "dummy",
                location : "dummy",
                avatar_url : "dummy"
                }
            }
        console.log("Child Constructor called")
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/SidharthVerma-tech");
        const json = await data.json();
        this.setState({
            userInfo : json
        })
    }
    render(){
        console.log("Child Render called")
        const {login, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <button className="cnt-btn" onClick={()=>{
                    // NEVER UPDATE STATE VARIABLE DIRECTY
                    // this.state.count = this.state.count+1 // never
                    this.setState ({
                        count : this.state.count+1
                    })
                }}>CLick me
                </button>
                <img src={avatar_url}/>
                <h1>{login}</h1>
                <h1>{location}</h1>
            </div>

        )
    }
}
export default UserClass