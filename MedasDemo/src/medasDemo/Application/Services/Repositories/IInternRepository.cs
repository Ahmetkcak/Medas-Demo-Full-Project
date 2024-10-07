using Domain.Entities;
using NArchitecture.Core.Persistence.Repositories;

namespace Application.Services.Repositories;

public interface IInternRepository : IAsyncRepository<Intern, Guid>, IRepository<Intern, Guid>
{
}