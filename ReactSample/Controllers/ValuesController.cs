using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ReactSample.Controllers
{
    using ReactSample.Models;
    public class ValuesController : ApiController
    {
       

        [Route("api/storeapi")]
        public string post(Store store)
        {
            AssignmentEntities db = new AssignmentEntities();
            db.Stores.Add(store);
            db.SaveChanges();
            return "sucess";
        }

        [Route("api/storeapi")]
        public List<Store> GetStore()
        {
            AssignmentEntities db = new AssignmentEntities();
            List<Store> stores = db.Stores.ToList();
            stores.ToArray();
            return stores;
        }


        [Route("api/storeapi")]
        public string deleteStore(Store store)
        {
            AssignmentEntities db = new AssignmentEntities();
            Store p = db.Stores.Where(temp => temp.ID == store.ID).FirstOrDefault();
            if (p != null)
            {
                db.Stores.Remove(p);
                db.SaveChanges();
            }

            return "deleted";
        }

        [Route("api/storeapi")]
        public string putStore(Store s)
        {
            AssignmentEntities db = new AssignmentEntities();
           Store store = db.Stores.Where(temp => temp.ID == s.ID).FirstOrDefault();
            if (store == null)
            {
                return ("No data found");
            }
            else
            {
                store.ID = s.ID;
                store.Name = s.Name;
                store.Address = s.Address;
                db.SaveChanges();
                return "done";
            }
        }
        [Route("api/productapi")]
        public string post(Product product)
        {
            AssignmentEntities db = new AssignmentEntities();
            db.Products.Add(product);
            db.SaveChanges();
            return "sucess";
        }
        [Route("api/productapi")]
        public List<Product> GetProduct()
        {
            AssignmentEntities db = new AssignmentEntities();
            List<Product> products = db.Products.ToList();
            products.ToArray();
            return products;
        }
        [Route("api/productapi")]
        public string putProduct(Product p)
        {
            AssignmentEntities db = new AssignmentEntities();
            Product product = db.Products.Where(temp => temp.ID == p.ID).FirstOrDefault();
            if (product == null)
            {
                return ("No data found");
            }
            else
            {
                product.ID = p.ID;
                product.Name = p.Name;
                product.Price = p.Price;
                db.SaveChanges();
                return "done";
            }
        }


        [Route("api/productapi")]
        public string deleteProduct(Product product)
        {
            AssignmentEntities db = new AssignmentEntities();
            Product p = db.Products.Where(temp => temp.ID == product.ID).FirstOrDefault();
            if (p != null)
            {
                db.Products.Remove(p);
                db.SaveChanges();
            }

            return "deleted";
        }

        public List<Customer> Get()
        {
            AssignmentEntities db = new AssignmentEntities();
            List<Customer> customers = db.Customers.ToList();
            customers.ToArray();
            return customers;
        }


        public string post (Customer customer)
        {
            AssignmentEntities db = new AssignmentEntities();
            db.Customers.Add(customer);
            db.SaveChanges();
            return "sucess";
        }

        public string delete(Customer customer)
        {
            AssignmentEntities db = new AssignmentEntities();
            Customer c = db.Customers.Where(temp => temp.ID == customer.ID).FirstOrDefault();
            if(c !=null)
            {
                db.Customers.Remove(c);
                db.SaveChanges();
            }
           
            return "deleted";
        }

        public string put(Customer c)
        {
            AssignmentEntities db = new AssignmentEntities();
            Customer cust = db.Customers.Where(temp => temp.ID == c.ID).FirstOrDefault();
            if (cust == null)
            {
                return("No data found");
            }
            else
            {
                cust.ID = c.ID;
                cust.Name = c.Name;
                cust.Address = c.Address;
                db.SaveChanges();
                return "done";
            }
        }

       
    }
}