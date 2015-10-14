import React from 'react'
import styles from './index.css'
import classnames from 'classnames'

export class GameBoard extends React.Component {
  state = {
    grid: undefined
  }

  componentDidMount(){
    let dimensions = this.props.dimensions
    let grid = []

    for (let x = 0; x < dimensions[1]; x++) {
      let column = []
      for (let y = 0; y < dimensions[0]; y++) {
        column.push('')
      }
      grid.push(column)
    }

    this.setState({grid})
  }

  drawBoard(){
    if (!this.state.grid) {
      return
    }

    let rows = []
    let grid = this.state.grid

    for (let x = 0; x < grid.length; x ++) {
      let squares = []
      for (let y = 0; y < grid[x].length; y++) {
        let key =`${x}-${y}`
        let snakeClass = (x === 10 && y === 10) ? styles.snake : null

        squares.push(<div key={key} className={classnames(snakeClass, styles.gridSquare)}></div>)
      }
      rows.push(
        <div key={x} className={styles.row}>
          {squares}
        </div>
      )
    }

    return rows
  }

  render(){

    return (
      <div className={styles.container}>
        {this.drawBoard()}
      </div>
    )
  }
}