using DAL.Models;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.servises
{
    public interface IbuyBL
    {   
        //הוספה לטבלת קניות
        public int AddBuy(BuyDTO b);

        //פונקציה השןלפת את הקניות של הלקוח
        //public List<>

        //עידכון כמות -לשקול לעשות את זה במשחקים 
    }
}
