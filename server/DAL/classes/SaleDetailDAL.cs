using DAL.Models;
using DAL.servises;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.classes
{
    public class SaleDetailDAL : IsaleDetailDAL
    {
        GamesShopContext db=new GamesShopContext();
        public bool Add(SaleDetail s)
        {
            try
            {
                db.SaleDetails.Add(s);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool dell(int saleCode)
        {
            try
            {
                SaleDetail s = db.SaleDetails.FirstOrDefault(j => j.SaleCode == saleCode);
                db.SaleDetails.Remove(s);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public List<SaleDetail> GetSellDitauls()
        {
            return db.SaleDetails.ToList();
        }

        public bool Update(int saleCode, SaleDetail s)
        {
            try
            {
                SaleDetail k = db.SaleDetails.FirstOrDefault(j => j.SaleCode == saleCode);
                db.Entry(k).CurrentValues.SetValues(s);
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
