using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ReactSample.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AddCustomer()
        {
            return View();
        }

        public ActionResult Customer()
        {
            return View();
        }

        public ActionResult ViewCustomer()
        {
            return View();
        }

        public ActionResult Update()
        {
            return View();
        }
    }
}