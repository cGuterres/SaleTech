using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SaleTech.Repository.Interface;
using TechSale.Entity;
using TechSale.Repository.DataContext;

namespace SaleTech.Repository
{
    public class UserRepository : IUser
    {
        private readonly TechSaleDataContext _repo;
        public UserRepository(TechSaleDataContext repo)
        {
            _repo = repo;

        }
        public async Task<UserSys> FindUser(string email, string password)
        {
            IQueryable<UserSys> query = _repo.UserSys
            .Include(ur => ur.UserRole);
            if(query != null)
            {   
                query = query.Where(u => u.Email.Equals(email) && u.Password.Equals(password));
            }

            return query != null ? await query.FirstOrDefaultAsync() : null;
        }

        public async Task<UserSys> GetUser(int id)
        {
            IQueryable<UserSys> query = _repo.UserSys
            .Include(ur => ur.UserRole);
            if(query != null)
            {   
                query = query.Where(u => u.Id == id);
            }
            return query != null ? await query.FirstOrDefaultAsync() : null;
        }
    }
}