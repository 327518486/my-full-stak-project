using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.servises
{
    public interface IsaleDetailDAL
    {
        //שליפה
        public List<SaleDetail> GetSellDitauls();
        //הוספה
        public bool Add(SaleDetail s);
        //מחיקה
        public bool dell(int SaleCode);
        //עידכון
        public bool Update(int SaleCode, SaleDetail s);
    }
}
