/**
 * Loader view when loading pages
 * file: Loader.jsx
 */

import './Loader.scss';
import Header from '../../organisms/Header';
import Footer from '../../molecules/Footer/Footer'
const Loader = () => {
  return (
    <>
      <Header />
      <div class='center'>
        <div class='wave'></div>
        <div class='wave'></div>
        <div class='wave'></div>
        <div class='wave'></div>
        <div class='wave'></div>
        <div class='wave'></div>
        <div class='wave'></div>
        <div class='wave'></div>
        <div class='wave'></div>
        <div class='wave'></div>
      </div>
      <Footer />
    </>
  );
};

export default Loader;
