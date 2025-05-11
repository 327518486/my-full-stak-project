using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.servises
{
    public interface IcustomerDAL
    {
        //שליפה
        public List<Customer> GetCustomer();
        //הוספה
        public bool Add(Customer c);
        //מחיקה
        public bool dell(int custID);
        //עידכון
        public bool Update(int custID, Customer c);
    }
}
