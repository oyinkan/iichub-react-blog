import React from 'react';

export default function Header(props) {
    return (
        <React.Fragment>
            <header className="masthead" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
                <div className="overlay" />
                <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="site-heading">
                        <h1>{props.heading}</h1>
                        <span className="subheading">{props.subheading}</span>
                    </div>
                    </div>
                </div>
                </div>
            </header>
        </React.Fragment>
    )
}