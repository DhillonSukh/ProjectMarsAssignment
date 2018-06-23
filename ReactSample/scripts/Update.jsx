
class Customer extends React.Component {

    constructor(props) {
        super(props);
        var url_string = window.location.href;
        var url = new URL(url_string);
        var Name = url.searchParams.get("Name");
        var Address = url.searchParams.get("Address");
        this.state = {
            customerName: Name,
            customerAddress: Address
        }
        this.nameHandler = this.nameHandler.bind(this);
        this.addressHandler = this.addressHandler.bind(this);
        this.postData = this.postData.bind(this);
    }
    
    submitHandler(event) {
        event.preventDefault();
    }

    addressHandler(e) {
        this.setState({
            customerAddress: e.target.value
        })
    }

    nameHandler(e) {
        this.setState({
            customerName: e.target.value
        })
    }

    postData() {
        var url_string = window.location.href;
        var url = new URL(url_string);
        var id = url.searchParams.get("id");
        var customer = {
            id,
            Name: this.state.customerName,
            Address: this.state.customerAddress
        }
        console.log(customer);
        fetch('/api/values', {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(customer)
        }).then((res) => {
            if (res.status == 200) {
                alert('User has successfully updated');
                window.location.href = "/home/viewcustomer";
            }
        })
    }

    render() {
      
        return (
          <div className="customer">
              <form onSubmit={this.submitHandler} id="addCustomer">
              <div className="form-group">
                <label htmlFor="CustomerName">Name</label>
                <input type="text" className="form-control" value={this.state.customerName} onChange={this.nameHandler} />
              </div>
              <div className="form-group">
                <label  htmlFor="CustomerName">Address</label>
                <input type="text" className="form-control" value={this.state.customerAddress} onChange={this.addressHandler}/>
              </div>
              <input type="submit" className="btn btn-primary" value="Update" onClick={this.postData }/>
              </form>
          </div>
      );
    }
    
}

ReactDOM.render(
  <Customer />,
  document.getElementById('updatecustomer')
);