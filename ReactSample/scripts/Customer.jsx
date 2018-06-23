class Customer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            deletecustomer: ''
        }
       
    }
    render() {
        return (
            <div>
                <a href="/home/AddCustomer" className="btn btn-primary">Add Customer</a>
                <table className="table">
                    <thead>
                        <tr>
                            <td className="col-md-3">Name</td>
                             <td className="col-md-4">Address</td>
                        </tr>
                    </thead>
                </table>
               {this.state.customers.map((c) => {
               return <div>{c}</div>})}
            </div>
     );
    }

    

    editCustomer(r) {
       
       
    }

    deleteCustomer(customer) {
        fetch('/api/values', {
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(customer)
        }).then((res) => {
            if(res.status == 200)
            {
                alert('User is successfully Deleted');
                window.location.href = "/home/viewcustomer";
            }
        })
        
    }

    componentWillMount() {
        {
            fetch("/api/Values").
                   then(result => { return result.json() }).
                   then((data) => {
                       let customer =
                           data.map((r) => {
                               return (
                                   <table className="table" key={r.ID}>
                                       <tbody>
                                           <tr>
                                               <td className="col-md-4">{r.Name}</td>
                                               <td className="col-md-4">{r.Address}</td>
                                               <td className="col-md-2"><a href={"/home/update?id=" + r.ID + "&Name=" + r.Name + "&Address=" + r.Address} className="btn btn-success">Edit</a></td>
                                               <td className="col-md-2"><button onClick={() => {this.deleteCustomer(r)}} className="btn btn-danger">Delete</button></td>
                                           </tr>
                                       </tbody>
                                 </table>
                               );
                       })
                       this.setState({ customers: customer });
                       
                   })
           
        }

    }
}


ReactDOM.render(
  <Customer />,
  document.getElementById('viewcustomer')
);