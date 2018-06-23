class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
       
    }
    render() {
        return (
            <div>
                <a href="/product/AddProduct" className="btn btn-primary">Add Products</a>
                <table className="table">
                    <thead>
                        <tr>
                            <td className="col-md-3">Name</td>
                             <td className="col-md-4">Price</td>
                        </tr>
                    </thead>
                </table>
        {this.state.products.map((p) => {
            return <div>{p}</div>})}
     </div>
);
        }

        deleteProduct(product) {
            fetch('/api/productapi', {
                method: 'delete',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(product)
            }).then((res) => {
                if(res.status == 200)
                {
                    alert('Product is successfully Deleted');
                    window.location.href = "/product/product";
                }
            })
        
        }

        componentWillMount() 
            {
                fetch("/api/productapi").
                       then(result => { return result.json() }).
                       then((data) => {
                           let product =
                               data.map((r) => {
                                   return (
                                       <table className="table" key={r.ID}>
                                           <tbody>
                                               <tr>
                                                   <td className="col-md-4">{r.Name}</td>
                                                   <td className="col-md-4">{r.Price}</td>
                                                   <td className="col-md-2"><a href={"/product/update?id=" + r.ID + "&Name=" + r.Name + "&Price=" + r.Price} className="btn btn-success">Edit</a></td>
                                                   <td className="col-md-2"><button onClick={() => {this.deleteProduct(r)}} className="btn btn-danger">Delete</button></td>
                                               </tr>
                                           </tbody>
                                     </table>
                                   );
                       })
                this.setState({ products: product });
                       
            })
           
        }

    }


ReactDOM.render(
  <Product />,
  document.getElementById('product')
);