
class UpdateProduct extends React.Component {

    constructor(props) {
        super(props);
        var url_string = window.location.href;
        var url = new URL(url_string);
        var Name = url.searchParams.get("Name");
        var Price = url.searchParams.get("Price");
        this.state = {
            productName: Name,
            productPrice: Price
        }
        this.nameHandler = this.nameHandler.bind(this);
        this.priceHandler = this.priceHandler.bind(this);
        this.postData = this.postData.bind(this);
    }
    
    submitHandler(event) {
        event.preventDefault();
    }

    priceHandler(e) {
        this.setState({
            productPrice: e.target.value
        })
    }

    nameHandler(e) {
        this.setState({
            productName: e.target.value
        })
    }

    postData() {
        var url_string = window.location.href;
        var url = new URL(url_string);
        var id = url.searchParams.get("id");
        var product = {
            id,
            Name: this.state.productName,
            Price: this.state.productPrice
        }
        console.log(product);
        fetch('/api/productapi', {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then((res) => {
            if (res.status == 200) {
                alert('Product has successfully updated');
                window.location.href = "/product/product";
            }
        })
    }

    render() {
      
        return (
          <div className="product">
              <form onSubmit={this.submitHandler} id="addProduct">
              <div className="form-group">
                <label htmlFor="ProductName">Name</label>
                <input type="text" className="form-control" value={this.state.productName} onChange={this.nameHandler} />
              </div>
              <div className="form-group">
                <label  htmlFor="ProductPrice">Address</label>
                <input type="text" className="form-control" value={this.state.productPrice} onChange={this.priceHandler}/>
              </div>
              <input type="submit" className="btn btn-primary" value="Update" onClick={this.postData }/>
              </form>
          </div>
      );
    }
    
}

ReactDOM.render(
  < UpdateProduct/>,
  document.getElementById('updateproduct')
);