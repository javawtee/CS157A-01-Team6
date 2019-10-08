import React, {Component} from 'react';

class Search extends Component {

    state = {
        from = "",
        to = "",
        date = "",
        Flightclass = ""
	};

	onChangeDate = date => {
		console.log("Date: ", date);
		this.setState({ date });
	};

	handleChange = name => event => {
		this.setState({ [name]: event.target.value });
	};

	render() {
		const { classes } = this.props;
		const { date } = this.state;

		return (
		<div className="uk-card uk-card-default uk-card-body uk-align-center">

				<div class="uk-margin">
					<input class="uk-input" type="text" placeholder="Flying From: "></input>
				</div>

				<div class="uk-margin">
					<input class="uk-input" type="text" placeholder="Flying To: "></input>
				</div>

				<div class="uk-margin">
					<select class="uk-select">
						<option>Adult</option>
						<option>Child</option>
						<option>Infant</option>
						</select>
				</div>
				<form action>
                            <input class = "uk-input uk-form-width-medium" type= "text" placeholder = "previous journey"></input>
                            <button class="uk-button uk-button-default">
                                <span class="uk-icon uk-margin-small-right" uk-icon="icon: search">
                                </span>Go</button>
                </form>
		</div>
		);
	}
}

Search.propTypes = {
	classes: PropTypes.object.isRequired
};

<<<<<<< Updated upstream
export default Search;
=======
export default withStyles(styles)(Search);
>>>>>>> Stashed changes
