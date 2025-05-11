using DAL.Models;
using DAL.servises;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.classes
{
    public class CategoryDAL : IcategoryDAL
    {
        GamesShopContext db=new GamesShopContext();

        public List<Category> GetCategory()
        {
            return db.Categories.ToList();

        }
        public bool Add(Category c)
        {
            try
            {
                db.Categories.Add(c);
                db.SaveChanges();
                return true;
            }
            catch { return false; } 
        }

        public bool dell(int CategoryId)
        {
            try
            {
                Category i = db.Categories.FirstOrDefault(o => o.CategoryId == CategoryId);
                db.Categories.Remove(i);
                //הולכת ומשנה במסד
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool Update(int CategoryId, Category c)
        {
            try
            {
                //עידכון
                Category c1 = db.Categories.FirstOrDefault(o => o.CategoryId == CategoryId);
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
