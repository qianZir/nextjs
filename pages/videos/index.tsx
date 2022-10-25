import React, { useEffect } from 'react';

import styles from './index.module.scss';

const index = () => {
  useEffect(() => {
    console.log(123123);
  }, []);

  return <div className={styles.container}>123123</div>;
};

export default index;
