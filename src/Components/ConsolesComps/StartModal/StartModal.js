import React from 'react';

import classes from './StartModal.module.css';

const StartModal = props => {
  return (
      <div className={classes.StartModal}>
        <form onSubmit={props.submit}>
          <input 
            type='Number' 
            id='amount' 
            name='amount'
            placeholder='Enter 2 - 9999' 
            required minLength='1' maxLength='4'/>
          <button>Get Chips</button>
        </form>
      </div>    
  )
}

export default StartModal;