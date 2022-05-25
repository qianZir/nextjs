import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

const index = () => {
  const [rotateDeg, setRotateDeg] = useState(10);
  useEffect(() => {
    setTimeout(() => {
      if (rotateDeg > 0) {
        setRotateDeg((c) => c - 1);
      }
    }, 1000);
  }, [rotateDeg]);
  return <div className={`${styles.box} iconfont`}>&#xe760;</div>;
};

export default index;
