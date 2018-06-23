class Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stores: [],
        }
       
    }
    render() {
        return (
            <div>
                <a href="/store/AddStore" className="btn btn-primary">Add Stores</a>
                <table className="table">
                    <thead>
                        <tr>
                            <td className="col-md-3">Name</td>
                             <td className="col-md-4">Address</td>
                        </tr>
                    </thead>
                </table>
        {this.state.stores.map((p) => {
            return <div>{p}</div>})}
     </div>
);
        }

        deleteStore(store) {
            fetch('/api/storeapi', {
                method: 'delete',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(store)
            }).then((res) => {
                if(res.status == 200)
                {
                    alert('Store is successfully Deleted');
                    window.location.href = "/store/viewStore";
                }
            })
        
        }

        componentWillMount() {
            {
                fetch("/api/storeapi").
                       then(result => { return result.json() }).
                       then((data) => {
                           let store =
                               data.map((r) => {
                                   return (
                                       <table className="table" key={r.ID}>
                                           <tbody>
                                               <tr>
                                                   <td className="col-md-4">{r.Name}</td>
                                                   <td className="col-md-4">{r.Address}</td>
                                                   <td className="col-md-2"><a href={"/store/updatestore?id=" + r.ID + "&Name=" + r.Name + "&Address=" + r.Address} className="btn btn-success">Edit</a></td>
                                                   <td className="col-md-2"><button onClick={() => {this.deleteStore(r)}} className="btn btn-danger">Delete</button></td>
                                               </tr>
                                           </tbody>
                                     </table>
                                   );
                       })
                this.setState({ stores: store });
                       
            })
           
        }

    }
}


ReactDOM.render(
  <Store />,
  document.getElementById('store')
);