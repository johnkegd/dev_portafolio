import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Writing from '../sections/Writing';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Courses from '../sections/Courses';
import Carousel from '../components/Carousel';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Projects />
    <Courses />
    <Carousel />
    <Writing />
    <Footer />
  </Layout>
);

export default IndexPage;
