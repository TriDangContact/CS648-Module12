import React, {Component} from 'react';
import Filters from './Filters.js';
import ProductForm from './ProductForm.js';
import ProductTable from './ProductTable.js';


let PRODUCTS = {
   '1': {id: 1, category: 'Music', price: '$459.99', name: 'Clarinet'},
   '2': {id: 2, category: 'Music', price: '$5,000', name: 'Cello'},
   '3': {id: 3, category: 'Music', price: '$4,500', name: 'Tuba'},
   '4': {id: 4, category: 'Furniture', price: '$799', name: 'Chaise Lounge'},
   '5': {id: 5, category: 'Furniture', price: '$1,300', name: 'Dining Table'},
   '6': {id: 6, category: 'Furniture', price: '$100', name: 'Bean Bag'}
};

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      products: PRODUCTS
    }
    this.handleFilter = this.handleFilter.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  // allows the child component to set the state of the parent component
  handleFilter(filterInput) {
    this.setState(filterInput)
  }

  handleSave(product) {
    if (!product.id) {
      product.id = new Date().getTime()
    }
    // add the new product to our list and set it as the state
    this.setState( (prevState) => {
      let products = prevState.products
      products[product.id] = product
      return { products }
    });
  }

  handleDelete(productId) {
    this.setState( (prevState) => {
      let products = prevState.products
      delete products[productId]
      return {products}
    })
  }

  render() {
    return (
      <div className="container">
        <h1>My Inventory</h1>
        <div className="row">
          <div className="col"><Filters onFilter={this.handleFilter}/></div>
        </div>
        <div className="row">
          <div className="col">
            <ProductTable
            filterText={this.state.filterText}
            products={this.state.products}
            onDestroy={this.handleDelete}/>
          </div>
        </div>
        <div className="row">
          <div className="col"><ProductForm onSave={this.handleSave}/></div>
        </div>

      </div>
    )
  };
}

export default Product;
