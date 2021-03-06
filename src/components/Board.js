import React, { Component } from 'react'
import Card from "./Card";
var context = require.context('../1x', true, /\.(png)$/);
var classNames = {};
var files={};


context.keys().forEach((filename)=>{
    classNames[filename] = 'flex-item';
    files[filename] = context(filename);
});

class Board extends Component {

    state = {
        classCardObject: classNames,
        clickCount : 0
    }

    handleClick = (e) => {
        this.props.turnCardYellow ? this.handleSquareColor(e) :''
    }

    handleSquareColor = (e) => {
        if (!(this.state.classCardObject[["./" + e.target.id]]).includes('selected')
        ) {
            let newClickCount
            newClickCount = this.state.clickCount +1
            if (this.state.clickCount < 5) {
                const newClassObject = this.state.classCardObject
                newClassObject["./" + e.target.id] = "flex-item selected"
                this.setState({
                    classCardObject: newClassObject,
                    clickCount: newClickCount
                })
            }
        }
    }

    render() {
        const objMatchOrder ={
            1: '1',
            2:'king',
            3: 'queen',
            4: 'jack',
            5: '10',
            6: '9',
            7: '8',
            8: '7',
            9: '6',
            10: '5',
            11: '4',
            12: '3',
            13: '2'
        }

        const suits = ["_heart.png", "_spade.png", "_club.png", "_diamond.png" ]

        const ArrayCardValues = [ "Ace", "King", "Queen", "Jack", "Ten", "Nine",
            "Eight", "Seven" , "Six", "Five", "Four", "Three", "Two" ]

        return(
                <div className='flex-container flex-item'>

                    <div className='board flex-item'>
                        <div>



                            <table id="communityCards" onClick={this.props.handleClick} >
                                <tbody>
                                <tr>
                                    <th className="suit redSuit" align="center">HEARTS</th>
                                    <th className="suit blackSuit" align="center">SPADES</th>
                                    <th className="suit blackSuit" align="center">CLUBS</th>
                                    <th className="suit redSuit" align="center">DIAM'S</th>
                                </tr>

                                {ArrayCardValues.map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            {suits.map((suit) => {
                                                let idKey = objMatchOrder[index+1] + suit
                                                return (
                                                    <td key={suit}>
                                                        <Card
                                                            classCard =  {`${this.state.classCardObject[`./${idKey}`]}`}
                                                            id={`${objMatchOrder[index+1]}${suit}`}
                                                            textValue={value}
                                                            handleClick={this.handleClick}
                                                        />
                                                    </td>
                                                )
                                            })
                                            }
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Board

