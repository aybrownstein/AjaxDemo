using AjaxDemo.Web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AjaxDemo.Data;

namespace AjaxDemo.Web.Controllers
{
    public class HomeController : Controller
    {
        private string _connectionString = @"Data Source=.\sqlexpress;Initial Catalog=OneToManyDemo;Integrated Security=true;";


        public IActionResult Index()
        {
            return View();
        }

       [HttpPost]
       public IActionResult Add(Person person)
        {
            PersonDb db = new PersonDb(_connectionString);
            db.Add(person);
            return Json(person);
        }

        public IActionResult GetAll()
        {
            PersonDb db = new PersonDb(_connectionString);
            List<Person> people = db.GetAll();
            return Json(people);
        }

        [HttpPost]
        public void Delete(int id)
        {
            var db = new PersonDb(_connectionString);
            db.Delete(id);
           
        }

        [HttpPost]
        public IActionResult Updatet(Person person)
        {
            PersonDb db = new PersonDb(_connectionString);
            db.Update(person);
            return Json(person);
        }

    }
}
