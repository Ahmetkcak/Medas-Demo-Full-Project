using NArchitecture.Core.Persistence.Paging;
using Domain.Entities;
using Microsoft.EntityFrameworkCore.Query;
using System.Linq.Expressions;

namespace Application.Services.Interns;

public interface IInternService
{
    Task<Intern?> GetAsync(
        Expression<Func<Intern, bool>> predicate,
        Func<IQueryable<Intern>, IIncludableQueryable<Intern, object>>? include = null,
        bool withDeleted = false,
        bool enableTracking = true,
        CancellationToken cancellationToken = default
    );
    Task<IPaginate<Intern>?> GetListAsync(
        Expression<Func<Intern, bool>>? predicate = null,
        Func<IQueryable<Intern>, IOrderedQueryable<Intern>>? orderBy = null,
        Func<IQueryable<Intern>, IIncludableQueryable<Intern, object>>? include = null,
        int index = 0,
        int size = 10,
        bool withDeleted = false,
        bool enableTracking = true,
        CancellationToken cancellationToken = default
    );
    Task<Intern> AddAsync(Intern intern);
    Task<Intern> UpdateAsync(Intern intern);
    Task<Intern> DeleteAsync(Intern intern, bool permanent = false);
}
