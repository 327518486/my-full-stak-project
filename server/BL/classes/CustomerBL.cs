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
    public class CustomerBL:IcustomerBL
    {
        IMapper iMapper;

        IcustomerDAL c;
        public CustomerBL(IcustomerDAL cust)
        {

            this.c = cust;

            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<Myprofile>();
            });
            iMapper = config.CreateMapper();

        }

        public bool Add(CustomerDTO cu)
        {
            try
            {
                Customer c1 = iMapper.Map<CustomerDTO, Customer>(cu);
                c.Add(c1);
                return true;

            }
            catch
            {
                return false;
            }
            
        }

        public bool check(string name, string custPassWord)
        {
           // ניצן לבדוק לפי ID בלבד בגלל שזה המםתח הראשי
                
            //שליפה של הכל
                List<Customer> arr = c.GetCustomer();
            //הצבה במשתנה את הראשון שמוצא 
               Customer cust=arr.FirstOrDefault(x => (x.CustName.Equals(name) && x.CustPassWord.Equals(custPassWord)));
            //אם מצאת את מי שרציתי תחזיר כן
            if(cust.CustName.Equals(name) && cust.CustPassWord.Equals(custPassWord))
                return true;
            else
                return false;
        }

        public List<Customer> GetAllCust()
        {
            return c.GetCustomer();
        }

        public int GetcustId( string custPassWord)
        {
            //שליפה של הכל
            List<Customer> arr = c.GetCustomer();
            //הצבה במשתנה את הראשון שמוצא 
            Customer cust = arr.FirstOrDefault(x => (x.CustPassWord.Equals(custPassWord)));
            //אם מצאת את מי שרציתי תחזיר כן
            if ( cust.CustPassWord.Equals(custPassWord))
                return cust.CustId;
            else
                return 0;
        }
    }
}
