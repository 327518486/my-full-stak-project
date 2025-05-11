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
    public class GameBL:IgameBL
    {
        IMapper iMapper;

        IgameDAL g;
        public GameBL(IgameDAL g)
        {
            this.g = g;

            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<Myprofile>();
            });
            iMapper = config.CreateMapper();
        }

        public bool Add(GameDTO v)
        {
            Game c1 = iMapper.Map <GameDTO, Game>(v);
            return g.Add(c1);
        }

        public bool DeleteGame(int id)
        {
            return g.dell(id);  
        }

        public List<Game> GetAllGame()
        {
            return g.GetGame();
        }

        public Game GetGame(int id)
        {
           List<Game> arr= g.GetGame();
            for(int i = 0; i < arr.Count; i++)
            {
                if (arr[i].GameId==id)
                    return arr[i];

            }
            return null;
        }

        public List<Game> GetGameByCategoryID(int categoryId)
        {
            List<Game> arr = g.GetGame();
            List<Game> list = new List<Game>();
            for (int i = 0; i < arr.Count; i++)
            {
                if (arr[i].GameCategory==categoryId)
                {
                    list.Add(arr[i]);
                }
                   

            }
            return list;
        }

        public bool UpdateGame(int gameId, GameDTO h)
        {
            Game game = iMapper.Map<GameDTO,Game>(h);
            return g.Update(gameId, game);
        }
    }
}
