import React from 'react';
import styles from './cube.scss'

class Cube extends React.Component {
    render() {
      return (
        <div class={styles.wrapper}>
            <div class={styles.side + " " + styles.front}>Front</div>
            <div class={styles.side + " " + styles.top}>Top</div>
            <div class={styles.side + " " + styles.bottom}>Bottom</div>
            <div class={styles.side + " " + styles.back}>Back</div>
            <div class={styles.side + " " + styles.left}>Left</div>
            <div class={styles.side + " " + styles.right}>Right</div>
        </div>
      );
    }
  };

  export default Cube;