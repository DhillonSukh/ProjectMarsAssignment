
class Store extends React.Component {

    constructor(props) {
        super(props);
        var url_string = window.location.href;
        var url = new URL(url_string);
        var Name = url.searchParams.get("Name");
        var Address = url.searchParams.get("Address");
        this.state = {
            storeName: Name,
            storeAddress: Address
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
            storeAddress: e.target.value
        })
    }

    nameHandler(e) {
        this.setState({
            storeName: e.target.value
        })
    }

    postData() {
        var url_string = window.location.href;
        var url = new URL(url_string);
        var id = url.searchParams.get("id");
        var store = {
            id,
            Name: this.state.storeName,
            Address: this.state.storeAddress
        }
        console.log(store);
        fetch('/api/storeapi', {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(store)
        }).then((res) => {
            if (res.status == 200) {
                alert('Store has successfully updated');
                window.location.href = "/store/viewstore";
            }
        })
    }

    render() {
      
        return (
          <div className="store">
              <form onSubmit={this.submitHandler} id="addStore">
              <div className="form-group">
                <label htmlFor="CustomerName">Name</label>
                <input type="text" className="form-control" value={this.state.storeName} onChange={this.nameHandler} />
              </div>
              <div className="form-group">
                <label  htmlFor="CustomerName">Address</label>
                <input type="text" className="form-control" value={this.state.storeAddress} onChange={this.addressHandler}/>
              </div>
              <input type="submit" className="btn btn-primary" value="Update" onClick={this.postData }/>
              </form>
          </div>
      );
    }
    
}

ReactDOM.render(
  <Store/>,
  document.getElementById('updateStore')
);