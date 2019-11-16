using System.Collections.Generic;
using System.Threading.Tasks;
using TechSale.Entity;

namespace TechSale.Repository.Interface
{
    public interface ICustomer
    {
        Task<List<Customer>> SearchCustomer(int? userId);
    }
}