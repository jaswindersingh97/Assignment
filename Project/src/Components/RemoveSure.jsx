import React from 'react';
import style from './RemoveSure.module.css';

function RemoveSure({ onConfirm, onCancel }) {
  return (
    <div className={style.container}>
      <div className={style.internalbox}>
        <div className={style.heading}>
          <h1>Are you sure you want to continue?</h1>
        </div>
        <div className={style.buttons}>
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
}

export default RemoveSure;
