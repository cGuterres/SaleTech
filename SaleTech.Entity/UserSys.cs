using System.Collections.Generic;

namespace TechSale.Entity
{
    public class UserSys
    {
        public UserSys()
        {
            this.Customers = new List<Customer>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int UserRoleId { get; set; }
        public UserRole UserRole { get; set; }
        public IList<Customer> Customers { get; set; }
    }
}