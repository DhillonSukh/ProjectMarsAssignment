
class Customer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customerName: '',
            customerAddress: ''
        }
        this.postData = this.postData.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
        this.addressHandler = this.addressHandler.bind(this);
    }
    render() {
        return (
          <div className="customer">
              <form onSubmit={this.submitHandler} id="addCustomer">
              <div className="form-group">
                <label htmlFor="CustomerName">Name</label>
                <input type="text" className="form-control" placeholder="Enter Name" onChange={this.nameHandler}/>
              </div>
              <div className="form-group">
                <label  htmlFor="CustomerName">Address</label>
                <input type="text" className="form-control" placeholder="Enter Address" onChange={this.addressHandler}/>
              </div>
              <input type="submit" className="btn btn-primary" value="submit" onClick={this.postData}/>
              </form>
          </div>
      );
    }

    nameHandler(e) {
        this.setState({
            customerName: e.target.value
        })
    }

    addressHandler(e) {
        this.setState({
            customerAddress: e.target.value
        })
    }

    submitHandler(event) {
        event.preventDefault();
    }
    postData()
    {
        var Name = this.state.customerName;
        var Address = this.state.customerAddress;
        var customer ={
            Name,
            Address
        }

        fetch('/api/values', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(customer)
        }).then((res) => {
            if(res.status == 200)
            {
                alert('User has successfully saved');
                window.location.href = "/home/viewcustomer";
            }
        })
    }
}

ReactDOM.render(
  <Customer />,
  document.getElementById('addCustomer')
);