// import React from 'react';

class ProductList extends React.Component {
//upvotes
handleProductUpVote(productId){
  console.log(productId + ' was upvoted.');
}
render() {


// Sort products according to number of votes 
const products = Seed.products.sort((a,b) =>(
  b.votes -a.votes
));

// Build product components array 
const productComponents = Seed.products.map((product) =>(
  <Product
  key={'product-' + product.id}
  id={product.id}
  title={product.title}
  description={product.description}
  url={product.url}
  votes={product.votes}
  submitterAvatarUrl={product.submitterAvatarUrl}
  productImageUrl={product.productImageUrl}
  onVote={this.handleProductUpVote}
  />
));
return (
<div className='ui unstackable items'>
  {productComponents}
</div>
);
}
}


class Product extends React.Component{
  //Manually bind this to handlevote
  constructor(props){
    super(props); 

    //custom method bindings
    this.handleUpVote = this.handleUpVote.bind(this);
  }
  handleUpVote(){
    this.props.onVote(this.props.id);
  }
  render(){
    return(
      <div className='item'>
        <div className='image'>
           <img src={this.props.productImageUrl}></img>
        </div>
        <div className='middle aligned content'>
          <div>
            <a onClick={this.handleUpVote}>
              <i className="large caret up icon">
              </i>
              {this.props.votes}
            </a>
          </div>
          <div className='description'>
            <a href={this.props.url}>
              {this.props.title}
            </a>
            <p>
              {this.props.description}
            </p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img className='ui avatar image' src={this.props.submitterAvatarUrl}></img>
          </div>
        </div>
      </div>
    )
  }
};

ReactDOM.render(
  <ProductList/>,
  document.getElementById('content')
);

