using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class CustomerDTO
    {
        public int CustId { get; set; }
        public string? CustName { get; set; }
        public string? CustPassWord { get; set; }
        public string? CreditNum { get; set; }
        public string? Cvc { get; set; }
        public string? VolidThru { get; set; }
    }
}
