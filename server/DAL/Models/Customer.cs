using System;
using System.Collections.Generic;

namespace DAL.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Buys = new HashSet<Buy>();
        }

        public int CustId { get; set; }
        public string? CustName { get; set; }
        public string? CustPassWord { get; set; }
        public string? CreditNum { get; set; }
        public string? Cvc { get; set; }
        public string? VolidThru { get; set; }

        public virtual ICollection<Buy> Buys { get; set; }
    }
}
