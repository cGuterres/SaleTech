using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TechSale.Repository.Interface;

namespace SaleTech.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RegionController : ControllerBase
    {
        private readonly ICustomer _context;
        public RegionController(ICustomer context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var results = await _context.SearchAllRegions();

                return Ok(results);
            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                    $"Banco de dados sem acesso. {ex.Message}");
            }
        }
    }
}