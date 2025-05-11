using AutoMapper;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Myprofile : Profile
    {
        public Myprofile()
        {
            //המרות ל2 הכיוונים
            //קטגוריה
            CreateMap<Category, CategoryDTO>();
            CreateMap<CategoryDTO, Category>();
            //משחקים
            //CreateMap<Game, GameDTO>().
            //                ForMember(v => v.GameCategoryName, y => y.
            //                MapFrom(v => v.CategoryNameNavigation.GameCategoryName);
            //MapFrom(v => v.CategoryNameNavigation.GameCategoryName));
            CreateMap<Game, GameDTO>();
            CreateMap<GameDTO, Game>();
            //לקוחות
            CreateMap<Customer, CustomerDTO>();
            CreateMap<CustomerDTO, Customer>();
            //פרטי קניה
            CreateMap<SaleDetail, SaleDetailDTO>();
            CreateMap<SaleDetailDTO, SaleDetail>();
            //קניה
            CreateMap<Buy, BuyDTO>();
            CreateMap<BuyDTO, Buy>();

        }

    }
}
