import React from 'react';
import styles from './Main.module.css';

export default function Main() {
  return (
    <div>
      <div className={ styles.container }>
        <div className={ styles.item }>Номер/Дата</div>
        <div className={ styles.item }>Тип задания/Автор</div>
        <div className={ styles.item }>Аккаунт/Терминал</div>
        <div className={ styles.item }>Статус</div>
      </div>
      <hr />
    </div>
  )
}
