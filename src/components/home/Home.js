import React from 'react';
import Navbar from '../shared/navbar/Navbar';
import Header from '../shared/header/Header';
import Footer from '../shared/footer/Footer';
import AllPosts from '../all-posts/AllPosts';
import headerBackground from '../../images/home-bg.jpg';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Header
                backgroundImage={headerBackground}
                heading='IICUB Blog'
                subheading='Building human capacity for social good'
            />
            <AllPosts />
            <Footer />
        </div>
    );
}
