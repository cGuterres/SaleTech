using System.Collections.Generic;
using System.Threading.Tasks;
using TechSale.Entity;

namespace TechSale.Repository.Interface
{
    public interface ICustomer
    {
        Task<List<Customer>> SearchCustomerByUserId(int userId);
        Task<List<Customer>> SearchAllCustomer();
        Task <List<Gender>> SearchAllGenders();
        Task <List<City>> SearchAllCities();
        Task <List<Region>> SearchAllRegions();
        Task <List<Classification>> SearchAllClassifications();
    }
}