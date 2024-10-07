using Application.Services.Repositories;
using Domain.Entities;
using NArchitecture.Core.Persistence.Repositories;
using Persistence.Contexts;

namespace Persistence.Repositories;

public class InternRepository : EfRepositoryBase<Intern, Guid, BaseDbContext>, IInternRepository
{
    public InternRepository(BaseDbContext context) : base(context)
    {
    }
}