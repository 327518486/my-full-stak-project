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
   

    public class BuyBL:IbuyBL
    {
        IMapper iMapper;

        IbuyDAL b;
        public BuyBL(IbuyDAL b)
        {
            this.b = b;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<Myprofile>();
            });
            iMapper = config.CreateMapper();
        }
   

        public int AddBuy(BuyDTO buy)
        {
            buy.BuyDaty = DateTime.Today;
            Buy b1 = iMapper.Map<BuyDTO, Buy>(buy);
            b.Add(b1);
            return b1.BuyId;
         }

        





        //שלב א
        //יצירת מופע- פונקציה המקבלת 


















        //שלב 1
        //יצירת משתנה קניה עם קוד לקוח, תאריך קניה,וסכום 
        //הסכום יחושב לפי מערך פרטי הקניה
        //והוספה לטבלת קניות
        //שלב שני
        //יצירת משתנים לפי הרשימה של המשחקים
        //קוד קניה -לפי מה שחוזר  מיצירת הקניה
        //קוד משחק - לפי רשימת המשחקים
        //כמות לפי סינון המוצרים
        //והוספה לפרטי קניה
        //שלב שלישי
        //עידכון המלאי לפי פרטי הקניה
        //יש ליצור לכל שלב פונקציה משלו 
        //ולהפעיל בפונקצית הוספת קניה
        //ולתת גישה בקונטרולר רק לפונקציה של הוספת קניה


        //שלב 1
        //public int AddBuy(int custId, float sum)
        //{
        //    try
        //    {
        //        //יצירת משתנה
        //        Buy buy=new Buy();
        //        buy.CustId = custId;
        //        buy.BuySum=sum; 
        //        buy.BuyDaty=DateTime.Now;
        //        b.Add(buy);
        //        // שליפת קוד קניה
        //        int kode = 0;
        //        List < Buy > bl= b.GetBuy();
        //        for(int i = 0; i < bl.Count; i++)
        //        {
        //            //תחפש את הקניה שהכנסת עכשיו
        //            if(bl[i].CustId == buy.CustId && bl[i].BuyDaty == buy.BuyDaty && bl[i].BuySum== buy.BuySum)
        //            {
        //                //אם מצאת תשמור את קוד הקניה ותצא
        //                kode= bl[i].BuyId;
        //                break;
        //            }
        //        }
        //        //החזרת הקוד
        //        return kode;

        //    }
        //    catch
        //    {
        //        //אם לא הצלחת תחזיר -1
        //        return -1;
        //    }
        //}


    }
}
