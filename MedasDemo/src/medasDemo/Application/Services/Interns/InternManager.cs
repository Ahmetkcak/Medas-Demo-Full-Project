using Application.Features.Interns.Rules;
using Application.Services.Repositories;
using NArchitecture.Core.Persistence.Paging;
using Domain.Entities;
using Microsoft.EntityFrameworkCore.Query;
using System.Linq.Expressions;

namespace Application.Services.Interns;

public class InternManager : IInternService
{
    private readonly IInternRepository _internRepository;
    private readonly InternBusinessRules _internBusinessRules;

    public InternManager(IInternRepository internRepository, InternBusinessRules internBusinessRules)
    {
        _internRepository = internRepository;
        _internBusinessRules = internBusinessRules;
    }

    public async Task<Intern?> GetAsync(
        Expression<Func<Intern, bool>> predicate,
        Func<IQueryable<Intern>, IIncludableQueryable<Intern, object>>? include = null,
        bool withDeleted = false,
        bool enableTracking = true,
        CancellationToken cancellationToken = default
    )
    {
        Intern? intern = await _internRepository.GetAsync(predicate, include, withDeleted, enableTracking, cancellationToken);
        return intern;
    }

    public async Task<IPaginate<Intern>?> GetListAsync(
        Expression<Func<Intern, bool>>? predicate = null,
        Func<IQueryable<Intern>, IOrderedQueryable<Intern>>? orderBy = null,
        Func<IQueryable<Intern>, IIncludableQueryable<Intern, object>>? include = null,
        int index = 0,
        int size = 10,
        bool withDeleted = false,
        bool enableTracking = true,
        CancellationToken cancellationToken = default
    )
    {
        IPaginate<Intern> internList = await _internRepository.GetListAsync(
            predicate,
            orderBy,
            include,
            index,
            size,
            withDeleted,
            enableTracking,
            cancellationToken
        );
        return internList;
    }

    public async Task<Intern> AddAsync(Intern intern)
    {
        Intern addedIntern = await _internRepository.AddAsync(intern);

        return addedIntern;
    }

    public async Task<Intern> UpdateAsync(Intern intern)
    {
        Intern updatedIntern = await _internRepository.UpdateAsync(intern);

        return updatedIntern;
    }

    public async Task<Intern> DeleteAsync(Intern intern, bool permanent = false)
    {
        Intern deletedIntern = await _internRepository.DeleteAsync(intern);

        return deletedIntern;
    }
}
