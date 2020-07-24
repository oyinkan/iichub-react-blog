import React from 'react';
import Navbar from '../shared/navbar/Navbar';
import PostHeader from '../shared/header/PostHeader';
import PostContent from '../post-content/PostContent';
import Footer from '../shared/footer/Footer';
import headerBackground from '../../images/post-bg.jpg';

export default function Post() {
    return (
        <div>
            <Navbar />
            <PostHeader 
                backgroundImage={headerBackground} 
                heading='Man must explore, and this is exploration at its greatest' 
                subheading='Problems look mighty small from 150 miles up' 
                date='August 24, 2019'
            />
            <PostContent />
            <Footer />
        </div>
    );
}
