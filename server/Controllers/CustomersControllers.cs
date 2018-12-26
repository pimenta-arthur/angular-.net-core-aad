using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyApp.Models;

namespace MyApp.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class CustomersController : Controller
    {
        [HttpGet]
        public List<Customer> Get()
        {
            return new List<Customer>
            {
                new Customer { firstName = "Rachel", lastName = "Green" },
                new Customer { firstName = "Ross", lastName = "Geller" },
                new Customer { firstName = "Monica", lastName = "Geller" },
                new Customer { firstName = "Phoebe", lastName = "Buffay" },
                new Customer { firstName = "Joey", lastName = "Tribbiani" }
            };
        }
    }
}