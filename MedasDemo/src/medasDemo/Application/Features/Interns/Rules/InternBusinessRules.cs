using Application.Features.Interns.Constants;
using Application.Services.Repositories;
using NArchitecture.Core.Application.Rules;
using NArchitecture.Core.CrossCuttingConcerns.Exception.Types;
using NArchitecture.Core.Localization.Abstraction;
using Domain.Entities;

namespace Application.Features.Interns.Rules;

public class InternBusinessRules : BaseBusinessRules
{
    private readonly IInternRepository _internRepository;
    private readonly ILocalizationService _localizationService;

    public InternBusinessRules(IInternRepository internRepository, ILocalizationService localizationService)
    {
        _internRepository = internRepository;
        _localizationService = localizationService;
    }

    private async Task throwBusinessException(string messageKey)
    {
        string message = await _localizationService.GetLocalizedAsync(messageKey, InternsBusinessMessages.SectionName);
        throw new BusinessException(message);
    }

    public async Task InternShouldExistWhenSelected(Intern? intern)
    {
        if (intern == null)
            await throwBusinessException(InternsBusinessMessages.InternNotExists);
    }

    public async Task InternIdShouldExistWhenSelected(Guid id, CancellationToken cancellationToken)
    {
        Intern? intern = await _internRepository.GetAsync(
            predicate: i => i.Id == id,
            enableTracking: false,
            cancellationToken: cancellationToken
        );
        await InternShouldExistWhenSelected(intern);
    }
}