import React from 'react';
import { Link } from 'react-router-dom';

export default function PostHeader(props) {
    return (
        <React.Fragment>
            <header className="masthead" style={{backgroundImage: `url(${props.backgroundImage})` }}>
                <div className="overlay" />
                <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="post-heading">
                        <h1>{props.heading}</h1>
                        <h2 className="subheading">{props.subheading}</h2>
                        <span className="meta">
                            Posted by <Link to="/">Start Bootstrap</Link> on {props.date}
                        </span>
                    </div>
                    </div>
                </div>
                </div>
            </header>
        </React.Fragment>
    )
}