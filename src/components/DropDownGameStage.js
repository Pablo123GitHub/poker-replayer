import React, {Component} from 'react'

class DropDownGameStage extends Component {

    render() {

        return (
            <div className='flex-item flex-container'>
                <select value={this.props.value}
                        onChange={this.props.handleSelectField}
                        readOnly
                        className='flex-item'>
                    <option value="flop">FLOP</option>
                    <option value="turn">TURN</option>
                    <option value="river">RIVER</option>
                </select>
            </div>
        )
    }
}

export default DropDownGameStage
