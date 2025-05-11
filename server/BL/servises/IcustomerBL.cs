using DAL.Models;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.servises
{
    public interface IcustomerBL
    {
        //הוספה
        public bool Add(CustomerDTO c);
        //בדיקה אם קיים
        public bool check(string name, string custPassWord);
        //שליפה 
        public List<Customer> GetAllCust();
        //בודק אם קיים אם כן מחזיר את הID שלו
        public int GetcustId( string custPassWord);
    }
}
