
class AddStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            storeName: '',
            storeAddress: ''
        }
        this.postData = this.postData.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
        this.addressHandler = this.addressHandler.bind(this);
    }
    render() {
        return (
          <div className="store">
              <form onSubmit={this.submitHandler} id="addStore">
              <div className="form-group">
                <label htmlFor="StoreName">Name</label>
                <input type="text" className="form-control" placeholder="Enter Name" onChange={this.nameHandler}/>
              </div>
              <div className="form-group">
                <label  htmlFor="StoreAddress">Address</label>
                <input type="text" className="form-control" placeholder="Enter Address" onChange={this.addressHandler}/>
              </div>
              <input type="submit" className="btn btn-primary" value="submit" onClick={this.postData}/>
              </form>
          </div>
      );
    }

    nameHandler(e) {
        this.setState({
            storeName: e.target.value
        })
    }

    addressHandler(e) {
        this.setState({
            storeAddress: e.target.value
        })
    }

    submitHandler(event) {
        event.preventDefault();
    }
    postData()
    {
        var Name = this.state.storeName;
        var Address = this.state.storeAddress;
        var store ={
            Name,
            Address
        }

        fetch('/api/storeapi', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(store)
        }).then((res) => {
            if(res.status == 200)
            {
                alert('User has successfully saved');
                window.location.href = "/store/viewstore";
            }
        })
    }
}

ReactDOM.render(
  <AddStore />,
  document.getElementById('addStore')
);