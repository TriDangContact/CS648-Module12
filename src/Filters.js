import React, {Component} from 'react';

class Filters extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  // called when the input changes
  handleChange(e) {
    const value = e.target.value
    const name = e.target.name

    // calls the parent's passed in function, passing in the return object as argument
    this.props.onFilter({
      [name]: value
    });
  }

  render() {
    return(
      <form>
        <div className="form-group">
          <input type="text" name="filterText" onChange={this.handleChange} className="form-control" placeholder="Search..."></input>
        </div>
      </form>
    )
  }
}

export default Filters;
