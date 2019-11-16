using System;

namespace TechSale.Entity
{
    public class Customer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public int GenderId { get; set; }
        public Gender Gender { get; set; }
        public int? CityId { get; set; }
        public City City { get; set; }
        public int? RegionId { get; set; }
        public Region Region { get; set; }
        public DateTime? LastPurchase { get; set; }
        public int? ClassificationId { get; set; }
        public Classification Classification { get; set; }
        public int? UserId { get; set; }
        public UserSys UserSys { get; set; }
    }
}