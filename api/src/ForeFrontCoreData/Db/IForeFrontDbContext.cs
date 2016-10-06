using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ForeFrontCore.Db
{
    public interface IForeFrontDbContext
    {
        int SaveChanges();
        int SaveChanges(bool acceptAllChangesOnSuccess);
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
        Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken);
        void Dispose();
        EntityEntry Add(object entity);
        EntityEntry Attach(object entity);
        EntityEntry Update(object entity);
        EntityEntry Remove(object entity);
        void AddRange(params object[] entities);
        void AttachRange(params object[] entities);
        void UpdateRange(params object[] entities);
        void RemoveRange(params object[] entities);
        void AddRange(IEnumerable<object> entities);
        void AttachRange(IEnumerable<object> entities);
        void UpdateRange(IEnumerable<object> entities);
        void RemoveRange(IEnumerable<object> entities);
        DatabaseFacade Database { get; }
        ChangeTracker ChangeTracker { get; }
        IModel Model { get; }
    }
}