import React, { Component } from 'react'
import './AddTask.css';
class AddTask extends Component {
    minDate = new Date().toISOString().slice(0, 10);
    state = {
        text: '',
        checked: false,
        date: this.minDate
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleClick = () => {
        console.log('dodaj');
        const { text, checked, date } = this.state;
        const add = this.props.add(text, date, checked);
        if (add) {
            this.setState({
                text: '',
                checked: false,
                date: this.minDate
            })

        }
    }

    render() {
        let maxDate = this.minDate.slice(0, 4) * 1 + 1;

        maxDate = maxDate + '-08-01';
        //console.log(maxDate);



        return (
            <div className="form">
                <input type='text' placeholder='Wpisz zadanie' value={this.state.text} onChange={this.handleText} />
                <input type='checkbox' checked={this.state.checked} id='important' onChange={this.handleCheckbox} />
                <label style={{ fontWeight: 'bold', fontFamily: 'Palatino Linotype' }} htmlFor='important'>priorytet<br /></label>
                <label style={{ fontStyle: 'italic' }} htmlFor='date'>Do kiedy wykonać</label>
                <input type='date' value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate} /><br />
                <button style={{ border: '2px solid pink', backgroundColor: 'lightgrey', fontFamily: 'Palatino Linotype' }} onClick={this.handleClick} > Dodaj</button>
            </div>

        );
    }
}

export default AddTask;