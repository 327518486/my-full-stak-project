using DAL.Models;
using DAL.servises;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.classes
{
    public class GameDAL : IgameDAL
    {
        GamesShopContext db=new GamesShopContext();
        public bool Add(Game gc)
        {
            //פונקציה שמכניסה למסד נתונים
            try
            {
               db.Games.Add(gc);
                //הולכת ומשנה במסד
                db.SaveChanges();

                return true;
            }

            catch
            {
                return false;
            }
        }

        public bool dell(int gameID)
        {
            try
            {
                Game c = db.Games.FirstOrDefault(o => o.GameId==gameID);
                db.Games.Remove(c);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public List<Game> GetGame()
        {
            return db.Games.ToList();
        }

        public bool Update(int gameID, Game g)
        {
            try
            {
                //Game c = db.Games.FirstOrDefault(o => o.GameId == gameID);
                //db.Entry(c).CurrentValues.SetValues(g);

                db.Games.FirstOrDefault(i=>i.GameId ==gameID).GameName = g.GameName;
                db.Games.FirstOrDefault(i => i.GameId == gameID).GameImg = g.GameImg;
                db.Games.FirstOrDefault(i => i.GameId == gameID).GameCategory = g.GameCategory;
                db.Games.FirstOrDefault(i => i.GameId == gameID).GamePrice = g.GamePrice;
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
