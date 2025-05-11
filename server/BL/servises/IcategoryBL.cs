using DAL.Models;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.servises
{
    public interface IcategoryBL
    {
        //get
        public List<CategoryDTO> Getall();
        //get category by id
        public Category GetById(int id);
        //add
        public bool Add(CategoryDTO category);
        //dell
        public bool dell(int categoryId);
        //update
        public bool Update(int categoryId,CategoryDTO category);
    }
}
