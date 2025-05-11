using BL.servises;
using DAL.Models;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
        IgameBL g;
        public GameController(IgameBL gb)
        {
            g = gb;
        }


        [HttpGet("GetAllList")]
        public List<Game> GetallGame()
        
        {
           return g.GetAllGame();
        }

        [HttpGet("gameById")]
        public Game GetGame(int id)
        {
            return g.GetGame(id);
        }

        [HttpGet("listGamesByCategory")]
        public List<Game> GetGameByCategoryID(int categoryId)
        {
            return g.GetGameByCategoryID(categoryId);
        }

        [HttpPut("addGame")]
        public bool Add(GameDTO ga)
        {
           return g.Add(ga);
        }

        [HttpDelete("dell")]
        public bool DeleteGame(int id)
        {
            return g.DeleteGame(id);
        }

        [HttpPost("updateGame")]
        public bool UpdateGame(int gameId, GameDTO ga)
        {
            return g.UpdateGame(gameId, ga);
        }

    }
}
