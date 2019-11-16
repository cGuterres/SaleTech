using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TechSale.Entity;
using TechSale.Repository.DataContext;
using TechSale.Repository.Interface;

namespace TechSale.Repository
{
    public class CustomerRepository : ICustomer
    {
        private readonly TechSaleDataContext _context;

        public CustomerRepository(TechSaleDataContext context)
        {
            _context = context;
            _context.ChangeTracker.QueryTrackingBehavior = Microsoft.EntityFrameworkCore.QueryTrackingBehavior.NoTracking;
        }

        public async Task<List<Customer>> SearchAllCustomer()
        {
            IQueryable<Customer> query = _context.Customer
            .Include(city => city.City)
            .Include(region => region.Region)
            .Include(gender => gender.Gender)
            .Include(classification => classification.Classification);

            return await query.OrderBy(c => c.Name).ToListAsync();
        }

        public async Task<List<Customer>> SearchCustomerByUserId(int userId)
        {
            //caso o parametro seja nulo.. deve trazer todos os clientes pois é um adm que está logado            
            IQueryable<Customer> query = _context.Customer
            .Include(city => city.City)
            .Include(region => region.Region)
            .Include(gender => gender.Gender)
            .Include(classification => classification.Classification)
            .Include(us => us.UserSys);

            if(query != null && query.ToListAsync().Result.Count > 0)
            {
                query = query.Where(customer => customer.UserSysId.HasValue && customer.UserSysId == userId);
            }
            return await query.OrderBy(c => c.Name).ToListAsync();
        }
    }
}