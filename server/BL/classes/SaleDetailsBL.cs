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
    public class SaleDetailsBL:IsaleDetailBL
    {
        IMapper iMapper;

        IsaleDetailDAL s;
        public SaleDetailsBL(IsaleDetailDAL s)
        {
            this.s = s;

            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<Myprofile>();
            });
            iMapper = config.CreateMapper();
        }

        public bool Add( SaleDetailDTO sd)
        {
            try
            {
               
                SaleDetail sd1 = iMapper.Map<SaleDetailDTO, SaleDetail>(sd);
                s.Add(sd1);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public List<SaleDetail> GetProd(int buyId)
        {
            List<SaleDetail> list = new List<SaleDetail>();

            List<SaleDetail> l = s.GetSellDitauls();
            for(int i = 0; i < l.Count; i++)
            {
                if (l[i].SaleCode == buyId)
                {
                    list.Add(l[i]);
                }
            }
            return list;
            
        }
    }
}
