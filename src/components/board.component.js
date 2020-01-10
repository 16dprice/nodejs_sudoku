import React, { Component } from "react";

export default class Board extends Component {

    constructor(props) {
        super(props);

        this.state = {
            board: [
                [3, 0, 6, 5, 0, 8, 4, 0, 0],
                [5, 2, 0, 0, 0, 0, 0, 0, 0],
                [0, 8, 7, 0, 0, 0, 0, 3, 1],
                [0, 0, 3, 0, 1, 0, 0, 8, 0],
                [9, 0, 0, 8, 6, 3, 0, 0, 5],
                [0, 5, 0, 0, 9, 0, 6, 0, 0],
                [1, 3, 0, 0, 0, 0, 2, 5, 0],
                [0, 0, 0, 0, 0, 0, 0, 7, 4],
                [0, 0, 5, 2, 0, 6, 3, 0, 0]
            ]
        };

    }

    getRow(row) {
        return (
            <tr>{this.state.board[row].map(num => <td>{num}</td>)}</tr>
        );
    }

    getBoard() {
        return (
            <table>
                <tbody>
                    {[...Array(9).keys()].map(num => this.getRow(num))}
                </tbody>
            </table>
        );
    }

    render() {
        return (
            <div>
                {this.getBoard()}
            </div>
        );
    }

}