import React from 'react';
import style from './style.module.scss';

export default function AsStudentOrCompany() {
  return (
    <div className={style.wrapperContent}>
      <div className={style.contentView}>
        <h1 className={style.mess}>Signed up successfully!</h1>
        <p className={style.description}>
          You can now dive into the world of blockchain and start exploring the platform. Happy
          learning!
        </p>
        <button className={style.buttonView}>Go to My Dashboard</button>
      </div>
    </div>
  );
}
