using BL.servises;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuyController : ControllerBase
    {

        IbuyBL bb;

        public BuyController(IbuyBL bb)
        {
            this.bb = bb;
        }

        [HttpPut("addBuy")]
        public int AddBuy(BuyDTO b)
        {
            return bb.AddBuy(b);
        }


    }
}
