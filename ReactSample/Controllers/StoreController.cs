using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ReactSample.Controllers
{
    public class StoreController : Controller
    {
        // GET: Store
        public ActionResult ViewStore()
        {
            return View();
        }
        public ActionResult AddStore()
        {
            return View();
        }
        public ActionResult UpdateStore()
        {
            return View();
        }

    }
}