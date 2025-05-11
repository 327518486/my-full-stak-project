using BL.servises;
using DAL.Models;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        IcategoryBL c;
        public CategoryController(IcategoryBL c)
        {
            this.c = c;
        }

        [HttpGet("myGetCategory")]
        public List<CategoryDTO> GetAllCategory()
        {
            return c.Getall();
        }

        // [HttpGet("myGetCategoryById")]
        [HttpGet("getById")]
        public Category GetCategoryById(int id)
        {
            return c.GetById(id);
        }

        [HttpPut("add")]
        public bool Add(CategoryDTO ca)
        {
            return c.Add(ca);
        }

        [HttpDelete("dell/{id}")]
        public bool dell(int categoryId)
        {
            return c.dell(categoryId);
        }

        [HttpPost("update/{id}")]
        public bool update(int id, CategoryDTO i)
        {
            return c.Update(id, i);
        }
    }
}
