import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Breadcrumb from './components/Header/Breadcrumb';
import Header from './components/Header/Header';
import Navigation from './components/Header/Navigation';
import TopHeader from './components/Header/TopHeader';
import Counter from './components/Main/Hero/Counter';
import Pallet from './components/Main/Hero/Pallet';
import Slider from './components/Main/Hero/Slider';
import Table from './components/Main/Table/Table';

function App() {
  return (
    <>
      <div className='hero'>
        <TopHeader />
        <Header />
        <Navigation />
        <Breadcrumb />
        <div className='hero-intro container d-flex'>
          <Slider />
          <Counter />
          <Pallet />
        </div>
      </div>
      <Table />
      <Footer />
    </>
  );
}

export default App;
