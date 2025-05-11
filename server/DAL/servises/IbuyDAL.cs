using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.servises
{
    public interface IbuyDAL
    {
        //שליפה
        public List<Buy> GetBuy();
        //הוספה
        public bool Add(Buy b);
        //מחיקה
        public bool dell(int buyID);
        //עידכון
        public bool Update(int buyID, Buy b);
    }
}

