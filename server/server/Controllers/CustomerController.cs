using BL.servises;
using DAL.Models;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        IcustomerBL c;

        public CustomerController (IcustomerBL c)
        {
            this.c = c;
        }


        [HttpPut("addCust")]
        public bool AddCusr(CustomerDTO cust)
        {
            return c.Add(cust);
        }

        [HttpGet("isExsist")]
        public bool checkIfExsist(string name, string custPassWord)
        {
            return c.check(name, custPassWord);
        }
        [HttpGet("getAll")]
        public List<Customer> GetAllCustomers()
        {
            return c.GetAllCust();
        }

        [HttpGet("custId")]
        public int GetCustId( string custPassWord)
        {
            return c.GetcustId(custPassWord);
        }
    }
}
