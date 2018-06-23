using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Security;
using System.Web.SessionState;
using System.Web.Http;

namespace ReactSample
{
    public class Global : HttpApplication
    {
        void Application_Start(object sender, EventArgs e)
     
        {
            // Code that runs on application startup
            System.Web.Routing.RouteTable.Routes.MapRoute("route1", "{controller}/{action}/{id}",
                new { controller = "controller", action = "update" });
            AreaRegistration.RegisterAllAreas();
            WebApiConfig.Register(GlobalConfiguration.Configuration);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            GlobalConfiguration.Configuration.EnsureInitialized();
        }
    }
}