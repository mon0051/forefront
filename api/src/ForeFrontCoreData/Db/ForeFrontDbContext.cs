using Microsoft.EntityFrameworkCore;

namespace ForeFrontCore.Db
{
    public class ForeFrontDbContext : DbContext, IForeFrontDbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=.\SQL2014;Database=ForeFront;Trusted_Connection=True;IntegratedSecurity=True;");
        }
    }
}