using DAL.Models;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.servises
{
    public interface IsaleDetailBL
    {
        //הוספת רשומה לטבלה
        public bool Add(SaleDetailDTO sd);
        //קבלת פרטי קניה לפי מספר קניה
        public List<SaleDetail> GetProd(int buyId);
    }
}
