import React from 'react'
import styles from './index.css'
import classnames from 'classnames'

import { GameBoard } from 'GameBoard'

export class App extends React.Component {
  state = {

  }

  render(){
    let dimensions = [20, 20]

    return (
      <div className={styles.container}>
        <GameBoard dimensions={dimensions} />
      </div>
    )
  }
}

