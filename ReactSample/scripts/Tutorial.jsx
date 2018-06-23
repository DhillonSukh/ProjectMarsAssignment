class CommentBox extends React.Component {
    render() {
        return (
          <div className="commentBox">
           <a href="/Home/viewcustomer" className="btn btn-primary" >Customer</a>
                    <a href="/product/product" className="btn btn-primary">Product</a>
                    <a href="/store/viewstore" className="btn btn-primary">Store</a>
          </div>
      );
    }

}

ReactDOM.render(
  <CommentBox />,
  document.getElementById('index')
);