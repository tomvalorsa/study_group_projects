import React from 'react'
import styles from './index.css'

export class GameBoard extends React.Component {
  state = {
    grid: undefined
  }

  componentDidMount(){
    let dimensions = this.props.dimensions
    let grid = []
    let columns = []

    for (let i = 0; i < dimensions[1]; i++) {
      columns.push([''])
    }
    for (let i = 0; i < dimensions[1]; i++) {
      grid.push(columns)
    }

    this.setState({grid})
  }

  drawBoard(){
    if (!this.state.grid) {
      return
    }

    let rows = []
    let grid = this.state.grid

    for (let i = 0; i < grid.length; i ++) {
      let columns = []
      for (let j = 0; j < grid[i].length; j++) {
        columns.push(<div className={styles.gridSquare}></div>)
      }
      rows.push(
        <div className={styles.row}>
          {columns}
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