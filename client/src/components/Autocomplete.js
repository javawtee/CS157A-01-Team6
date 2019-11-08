import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// props:
// data - required
// value - required
// className - optional
// onChange - optional
// suggestionItemOnClick - optional

export class Autocomplete extends Component {
    constructor(props) {
        super(props)
        this.autocompleteRef = null
        this.suggestionListRef = null
        this.inputRect = null
        this.setAutocompleteRef = element => {
            this.autocompleteRef = element
            this.inputRect = ReactDOM.findDOMNode(element).getBoundingClientRect()
        }
        //this.getInputRect = () => { return ReactDOM.findDOMNode(this.inputRect).getBoundingClientRect() }
        this.setSuggestionListRef = element => this.suggestionListRef = element
        this.arr = props.data
        this.state = {
            currentFocus: undefined,
            input: props.value,
            closeSuggestion: false,
        }
    }

    getSuggestionParentStyle = suggestionLength => {
        if (this.inputRect === null || this.state.input === "" || this.state.closeSuggestion || this.suggestionLength === 0)
            return { display: "none" }
        let { bottom, left, width, height } = this.inputRect
        return {
            position: "absolute",
            border: "1px solid #d4d4d4",
            zIndex: 9999,
            /*position the autocomplete items to be the same width as the container:*/
            top: "100 %",
            left: 0,
            right: 0,
            // top: bottom,
            // left,
            // width,
            height: (height + 2) * (suggestionLength < 8 ? suggestionLength : 7),
            overflowY: "auto",
            overflowX: "hidden"
        }
    }

    getSuggestionItemStyle = () => {
        return {
            background: "white",
            // height: this.inputRect.height,
            padding: 8,
            cursor: "pointer",
            borderBottom: "1px solid #d4d4d4",
            zIndex: 99999,
        }
    }

    selectSuggestion = e => this.setState({ input: e.target.id, closeSuggestion: true })

    createSuggestions = suggestions => {
        if (this.state.input === "" || suggestions.length === 0)
            return <React.Fragment></React.Fragment>
        else if (this.state.closeSuggestion === false)
            return suggestions.map((el, id) =>
                <div id={el} key={id} style={this.getSuggestionItemStyle()} onClick={this.selectSuggestion}>{el}</div>)
    }

    handleInputKeyDown = (e, suggestions) => {
        let x = this.suggestionListRef
        if (this.suggestionListRef) x = this.suggestionListRef.getElementsByTagName("div")
        if (e.keyCode === 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            this.setState(prevState => ({ currentFocus: prevState.currentFocus + 1 }), () => {
                /*and and make the current item more visible:*/
                this.addActive(x);
            })
        } else if (e.keyCode === 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            this.setState(prevState => ({ currentFocus: prevState.currentFocus - 1 }), () => {
                /*and and make the current item more visible:*/
                this.addActive(x);
            })
        } else if (e.keyCode === 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (this.state.currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[this.state.currentFocus].click();
            }
        }
    }

    addActive = x => {
        let currentFocus = this.state.currentFocus
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        this.removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "suggestion-item-active":*/
        x[currentFocus].classList.add("suggestion-item-active");
        var scrollTo = x[currentFocus].offsetTop;
        this.suggestionListRef.scrollTop = scrollTo;
    }

    removeActive = x => {
        /*a function to remove the "active" class from all suggestion items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("suggestion-item-active");
        }
    }

    render() {
        var suggestions = this.arr && this.arr.length > 0 ? this.arr.filter(e => e.toUpperCase().includes(this.state.input.toUpperCase())) : []
        return (
            <div style={{ position: "relative" }}>
                <input
                    className={this.props.className}
                    ref={this.setAutocompleteRef}
                    type="text"
                    value={this.state.input}
                    onChange={e => this.setState({ input: e.target.value, currentFocus: -1 })}
                    onFocus={() => this.setState({ closeSuggestion: false })}
                    //onBlur={() => this.setState({ closeSuggestion: true })}
                    onKeyDown={e => this.handleInputKeyDown(e, suggestions)}
                />
                <div
                    ref={this.setSuggestionListRef}
                    className="suggestion-list"
                    style={this.getSuggestionParentStyle(suggestions.length)}
                >
                    {this.createSuggestions(suggestions)}
                </div>
            </div>
        )
    }
}

export default Autocomplete
