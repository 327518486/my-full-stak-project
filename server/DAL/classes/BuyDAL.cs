using DAL.Models;
using DAL.servises;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.classes
{
    public class BuyDAL : IbuyDAL
    {
        GamesShopContext db = new GamesShopContext();


        public bool Add(Buy b)
        {

            try
            {
                db.Buys.Add(b);
                db.SaveChanges();
                return true;
            }
            catch { return false; }
        }

        public bool dell(int buyID)
        {
            try
            {
                Buy i = db.Buys.FirstOrDefault(o => o.BuyId == buyID);
                db.Buys.Remove(i);
                //הולכת ומשנה במסד
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public List<Buy> GetBuy()
        {
            return db.Buys.ToList();
        }

        public bool Update(int buyID, Buy b)
        {
            try
            {
                //עידכון
                Buy b1 = db.Buys.FirstOrDefault(o => o.BuyId == buyID);
                db.Entry(b1).CurrentValues.SetValues(b);
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
