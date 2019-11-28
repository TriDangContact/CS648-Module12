import React, {Component} from 'react';

class ProductRow extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(id) {
    this.props.onDestroy(this.props.product.id);
  }

  render() {
    const {product} = this.props;
    return(
      <tr>
          <th scope="row">{product.id}</th>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.category}</td>
          <td>{<button className="btn btn-info" onClick={this.handleDelete}>Delete</button>}</td>
      </tr>
    )
  }
}

export default ProductRow;
