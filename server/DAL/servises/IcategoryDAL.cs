using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.servises
{
    public interface IcategoryDAL
    {
        //שליפה
        public List<Category> GetCategory();
        //הוספה
        public bool Add(Category c);
        //מחיקה
        public bool dell(int CategoryId);
        //עידכון
        public bool Update(int CategoryId, Category c);
    }
}
