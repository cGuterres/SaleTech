using System.Threading.Tasks;
using TechSale.Entity;

namespace SaleTech.Repository.Interface
{
    public interface IUser
    {
        Task<UserSys> FindUser(string email, string password);
        Task<UserSys> GetUser(int id);
    }
}