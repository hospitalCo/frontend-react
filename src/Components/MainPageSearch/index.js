import React, { useState } from 'react';
import styles from './mainpagesearch.module.css';
import SearchBox from '../SearchBox';
import hospitals from '../../assets/hospitals.jpg';

const MainPageSeach = () => {
  // const title = 'Let\'s act before our hospitals and staff have shortage of supplies required in this war on COVID-19';
  const subTitle = 'Search for supplies required by hospitals to fight COVID19';
  return (
    <div className={styles.imageContainer}>
      <img
        alt={'help'}
        className={styles.backgroundImage}
        responsive
        src={hospitals}
      />
      <div className={styles.overLayText}>
        <div className={styles.forhospitals}>FORHOSPITALS</div>
        <div className={styles.underline} />
        {/* <div className={styles.subTitle}>
          {title}
        </div> */}
        <div className={styles.caption}>
          {subTitle}
        </div>
        <SearchBox />
      </div>
    </div>
  )
};

export default MainPageSeach;
