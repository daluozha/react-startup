import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// https://zh-hans.reactjs.org/tutorial/tutorial.html

function Square(props){
    return (
        <button
            className="square"
        >
            {props.value}
        </button>
    )
}

class Board extends Component{
    renderSquare(item){
        return [item,++item,++item].map((ele)=>{
            return (
                <Square
                    value={ele}
                />
            )
        })
    }
    renderRow(){
        return [0,3,6].map(item => {
            return (<div className="board-row">
                {this.renderSquare(item)}
            </div>)
        })
    }
    render(){
        return (
            <div>
                {this.renderRow()}
            </div>
        )
    }
}

class Game extends React.Component{
    render(){
        return (
            <div className='game'>
                <Board/>
            </div>
        )
    }
}

ReactDOM.render(<Game/>,document.getElementById('root'))