using Microsoft.EntityFrameworkCore;
using TechSale.Entity;
namespace TechSale.Repository.DataContext
{
    public class TechSaleDataContext : DbContext
    {
        public TechSaleDataContext(DbContextOptions<TechSaleDataContext> options) : base (options){}
        public DbSet<City> City { get; set; }
        public DbSet<Classification> Classification { get; set; }
        public DbSet<Customer> Customer { get; set; }
        public DbSet<Gender> Gender { get; set; }
        public DbSet<Region> Region { get; set; }
        public DbSet<UserRole> UserRole { get; set; }
        public DbSet<UserSys> UserSys { get; set; } 
    }
}