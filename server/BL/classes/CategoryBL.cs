using AutoMapper;
using BL.servises;
using DAL.Models;
using DAL.servises;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.classes
{
    public class CategoryBL : IcategoryBL
    {
        //לאפשר המרת נתונים
        IMapper iMapper;

        IcategoryDAL c;
        public CategoryBL(IcategoryDAL c)
        {
            this.c = c;

            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<Myprofile>();
            });
            iMapper = config.CreateMapper();
        }

        //הוספה
        public bool Add(CategoryDTO category)
        {
            Category c1=iMapper.Map<CategoryDTO, Category>(category);
            return c.Add(c1); 
        }

        //שליפת כל הקטגוריות
        public List<CategoryDTO> Getall()
        {
            //return c.GetCategory();
            return iMapper.Map<List<Category>, List<CategoryDTO>>(c.GetCategory());
        }

        //מחיקה
        public bool dell(int categoryId)
        {
            return c.dell(categoryId);  
        }

        //עידכון
        public bool Update(int categoryId, CategoryDTO category)
        {
            Category it = iMapper.Map<CategoryDTO, Category>(category);
            return c.Update(categoryId,it);
           
        }

        //קטגוריה לפי קוד 
        public Category GetById(int id)
        {
            Category c1=new();
            List<Category> x= c.GetCategory();
            for(int i = 0; i < x.Count; i++)
            {
                if (x[i].CategoryId == id)
                {
                    c1 = x[i];
                    return c1;
                };
            }
            return c1;
        }
    }
    
}
