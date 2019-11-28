import React, {Component} from 'react';

const RESET_VALUES = {id: '', category: '', price: '', name: ''}

class ProductForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
     product: Object.assign({}, RESET_VALUES), errors: {}
    }
    this.handleSave = this.handleSave.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  // pass the entered product back to the parent component and reset state
  handleSave(e) {
    this.props.onSave(this.state.product)
    this.setState({
      product: Object.assign({}, RESET_VALUES), errors: {}
    })
    e.preventDefault();
  }

  handleChange(e) {
    const target = e.target
    const value = target.value
    const name = target.name

    // set the value of the input that was changed
    this.setState((prevState) => {
      prevState.product[name] = value
      return { product: prevState.product }
    })
  }

  render() {
   return (
     <form className="col-6">
       <h3>Enter a new product</h3>
       <div className="form-group">
         <label for="nameInput">Name</label>
         <input type="text" name="name" className="form-control" id="nameInput" onChange={this.handleChange} value={this.state.product.name}></input>

         <label for="categoryInput">Category</label>
         <input type="text" name="category" className="form-control" id="categoryInput" onChange={this.handleChange} value={this.state.product.category}></input>

         <label for="priceInput">Price</label>
         <input type="text" name="price" className="form-control" id="priceInput" onChange={this.handleChange} value={this.state.product.price}></input>

         <br/>
         <button className="btn btn-info" onClick={this.handleSave}>Save</button>
       </div>
     </form>
   )
 }
}

export default ProductForm
