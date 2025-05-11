using DAL.Models;
using DAL.servises;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.classes
{
    public class CustomerDAL : IcustomerDAL
    {
        GamesShopContext db = new GamesShopContext();
        public bool Add(Customer c)
        {
            try
            {
                db.Customers.Add(c);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool dell(int custID)
        {
            try
            {
                Customer c = db.Customers.FirstOrDefault(o => o.CustId == custID);
                db.Customers.Remove(c);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public List<Customer> GetCustomer()
        {
            return db.Customers.ToList();
        }

        public bool Update(int custID, Customer c)
        {
            try
            {
                //עידכון
                Customer c1 = db.Customers.FirstOrDefault(o => o.CustId == custID);
                db.Entry(c1).CurrentValues.SetValues(c);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
