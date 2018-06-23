using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ReactSample.Controllers
{
    public class ProductController : Controller
    {
        // GET: Product
        public ActionResult AddProduct()
        {
            return View();
        }

        public ActionResult Product()
        {
            return View();
        }

        public ActionResult ViewProduct()
        {
            return View();
        }

        public ActionResult Update()
        {
            return View();
        }
    }
}