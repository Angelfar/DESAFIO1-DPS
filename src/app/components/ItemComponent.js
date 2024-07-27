import React from 'react';
import styles from './ItemComponent.module.css';

const ItemComponent = ({ titulo, descripcion, caracteristicas, imagen }) => {
  return (
    <div className={styles.item}>
      <img src={imagen} alt={titulo} className={styles.image}/>
      <div className={styles.content}>
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
        <strong>{caracteristicas}</strong>
      </div>
    </div>
  );
};

export default ItemComponent;
