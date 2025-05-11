using BL.servises;
using DAL.Models;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SaleDitailsController : ControllerBase
    {
        IsaleDetailBL s;
        public SaleDitailsController(IsaleDetailBL s)
        {
            this.s = s;
        }

        [HttpPut("additemtobuy")]
        public bool AddB( SaleDetailDTO sd )
        {
            return s.Add( sd);
        }

        [HttpGet("prodSale")]
        public List<SaleDetail> ProdSale(int bId)
        {
            return s.GetProd(bId);
        }
    }
}
