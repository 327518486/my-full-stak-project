using DAL.Models;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.servises
{
    public interface IgameBL
    {
        //שליפת רשימה
        public List<Game> GetAllGame();
        // שליפת משחק לפי קוד
        public Game GetGame(int id);
        //הוספה לרשימה
        public bool Add(GameDTO v);
        //עידכון משחק
        public bool UpdateGame(int gameId,GameDTO g);
        //מחיקת משחק
        public bool DeleteGame(int id);
        //שליפת משחקים לפי קוגוריה
        public List<Game> GetGameByCategoryID(int categoryId);
    }
}
