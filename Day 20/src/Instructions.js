import React from 'react'

const Instructions = () => {
    return (
        <div className="wrapper-ins">
            <div className="ins-container">
                <h1 className="ins-title">Instructions</h1>
                <ul className="ins-ul">
                    <li className="ins-li">build a container</li>
                    <li className="ins-li">create a seperate function and use it as a component</li>
                    <li className="ins-li">pass props "calory and food" and call it to main component</li>
                </ul>
            </div>
            <h1 className="ins-head">Calories Read Only</h1>
        </div>
    )
}

export default Instructions