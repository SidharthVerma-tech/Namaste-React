import { useState } from "react"
const User = (props) => {
    const {name, address} = props
    const [count] = useState(0)
    return (
        <div className="user-card">
            <h1>{count}</h1>
            <h1>{name}</h1>
            <h1>{address}</h1>
        </div>
    )
}
export default User