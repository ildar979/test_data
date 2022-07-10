import React from 'react'
import cl from 'classnames'
import styles from '../../Pages/Main.module.css'
import style from './Task.module.css';

export default function Task({ task }) {

  function getClassByStatus(status) {
    if(status === 'started') {
      return style.bgColor__blue
    } else if(status === 'assigned_to') {
      return style.bgColor__orange
    } else if(status === 'completed') {
      return style.bgColor__aquamarine
    } else  if(status === 'declined') {
      return  style.bgColor__black
  } else return style.bgColor__green
}



function fullName(name) {
  const arr = name.split(' ');
  const initialsName = arr[0] + ' ' + arr[1].slice(0, 1) + '.'+  arr[2].slice(0, 1) + '.';
  return initialsName;
}

  return (
    <>
      <div className={styles.firstStr}>
        <p >№{task.id}</p>
        <div className={style.largeText}>{ task.order_type.name }</div>
        <div className={style.largeText}>{ task.account.name }</div>
        <div className={ cl(style.box, getClassByStatus(task.status)) }>{task.status}</div>
      </div>
      <div className={styles.secondStr}>
        <p>{task.created_date}</p>
        <div>{ fullName(task.created_user.surname+ ' ' +task.created_user.name+ ' ' +task.created_user.patronymic) }</div>
        <div>{task.terminal.name}</div>
      </div> 
    </>
  )
}
