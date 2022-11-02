import React from 'react';
import About_info from "../../component/aboutComponent/about_info";
import Styles from '../../component/aboutComponent/about.module.css';

function Index() {
  return (
    <>
      <div className={Styles.container}>
        <div>About</div>
        <About_info />
      </div>
    </>
  );
}

export default Index;