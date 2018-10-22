using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyApp.Models;

namespace MyApp.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class FriendsController : Controller
    {
        [HttpGet]
        public List<Friend> Get()
        {
            return new List<Friend>
            {
                new Friend { firstName = "Rachel", lastName = "Green" },
                new Friend { firstName = "Ross", lastName = "Geller" },
                new Friend { firstName = "Monica", lastName = "Geller" },
                new Friend { firstName = "Phoebe", lastName = "Buffay" },
                new Friend { firstName = "Joey", lastName = "Tribbiani" }
            };
        }
    }
}