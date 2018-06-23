
class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            productPrice: ''
        }
        this.postData = this.postData.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
        this.priceHandler = this.priceHandler.bind(this);
    }
    render() {
        return (
          <div className="product">
              <form onSubmit={this.submitHandler} id="addProduct">
              <div className="form-group">
                <label htmlFor="ProductName">Product Name</label>
                <input type="text" className="form-control" placeholder="Product Name" onChange={this.nameHandler}/>
              </div>
              <div className="form-group">
                <label  htmlFor="price">Price</label>
                <input type="text" className="form-control" placeholder="Enter Price" onChange={this.priceHandler}/>
              </div>
              <input type="submit" className="btn btn-primary" value="submit" onClick={this.postData}/>
              </form>
          </div>
      );
    }

    nameHandler(e) {
        this.setState({
            productName: e.target.value
        })
    }

    priceHandler(e) {
        this.setState({
            productPrice: e.target.value
        })
    }

    submitHandler(event) {
        event.preventDefault();
    }
    postData()
    {
        var Name = this.state.productName;
        var Price = this.state.productPrice;
        var product ={
            Name,
            Price
        }

        fetch('/api/productapi', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then((res) => {
            if(res.status == 200)
            {
                alert('Product has successfully saved');
                window.location.href = "/product/product";
            }
        })
    }
}

ReactDOM.render(
  <AddProduct />,
  document.getElementById('addProduct')
);