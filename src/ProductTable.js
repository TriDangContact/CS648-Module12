import React, {Component} from 'react';
import ProductRow from './ProductRow.js';

class ProductTable extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(id) {
    this.props.onDestroy(id)
  }

  render() {
    const { products } = this.props;
    const { filterText } = this.props;

    // map a JS object containg product objects into an array of ProductRow components so that we can iterate through it
    const rows = Object.keys(products)
    // need to filter out the products depending on the filter
    .filter(index => products[index].name.indexOf(filterText) !== -1)
    // then map the filtered values to a ProductRow if there's any
    .map(
      (index) => {
          return(
            <ProductRow
              key={index}
              product={products[index]}
              onDestroy={this.handleDelete}/>
          )
      }
    )

    return(
      <div>
        <table className="table table-dark table-striped">
          <thead className="thead-light">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {rows.map(
              (productRow) => {
                return(productRow)
              }
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ProductTable;
