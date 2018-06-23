
class DetailAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customerName: [],
            productName: [],
            storeName: []
        }
        this.postData = this.postData.bind(this);
      
    }

    submitHandler(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit= {this.submitHandler}>
                 <div className="form-group col-md-12">
                 <label htmlFor="inputState">Customers</label>
                 <select id="customer" className="form-control">
                     {this.state.customerName}
                 </select>
                 </div>
                <br />
                <div className="form-group col-md-12">
                 <label htmlFor="inputState">Products</label>
                 <select id="product" className="form-control">
                     {this.state.productName}
                 </select>
                </div>
                <br />
                <div className="form-group col-md-12">
                 <label htmlFor="inputState">Stores</label>
                 <select id="store" className="form-control">
                     {this.state.storeName}
                 </select>
                </div>
                <br />
                    <input type="submit" className="btn btn-primary" value="submit" onClick={this.postData} />
                </form>
            </div>
        );

    }

    postData() {
        var customer = document.getElementById("customer");
        var selectedCustomer = customer.options[customer.selectedIndex].value;
        var product = document.getElementById("product");
        var selectedProduct = product.options[product.selectedIndex].value;
        var store = document.getElementById("store");
        var selectedStore = store.options[store.selectedIndex].value;
        console.log("customer " + selectedCustomer);
        console.log("product " + selectedProduct);
        console.log("store " + selectedStore);
    }

    componentWillMount() {
        fetch("/api/values").
               then(result => { return result.json() }).
               then((data) => {
                   let customer =
                       data.map((r) => {
                           return (
                                        <option>{r.Name}</option>

                           );
                       })
                   this.setState({ customerName: customer });

               });
        fetch("/api/productapi").
        then(result => { return result.json() }).
        then((data) => {
            let product =
                data.map((r) => {
                    return (
                                 <option>{r.Name}</option>

                    );
                })
            this.setState({ productName: product });

        });
        fetch("/api/storeapi").
                       then(result => { return result.json() }).
                       then((data) => {
                           let store =
                               data.map((r) => {
                                   return (
                                                <option>{r.Name}</option>

                                   );
                               })
                           this.setState({ storeName: store });

                       });


    }



    submitHandler(event) {
        event.preventDefault();
    }
}

ReactDOM.render(
  <DetailAdd />,
  document.getElementById('detail')
);
