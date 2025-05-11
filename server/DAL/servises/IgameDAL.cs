using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.servises
{
    public interface IgameDAL
    {
        //שליפה
        public List<Game> GetGame();
        //הוספה
        public bool Add(Game gc);
        //מחיקה
        public bool dell(int gameID);
        //עידכון
        public bool Update(int gameID, Game g);
    
}
}
