using Application.Features.Interns.Constants;
using Application.Features.Interns.Rules;
using Application.Services.Repositories;
using AutoMapper;
using Domain.Entities;
using NArchitecture.Core.Application.Pipelines.Authorization;
using MediatR;
using static Application.Features.Interns.Constants.InternsOperationClaims;

namespace Application.Features.Interns.Commands.Update;

public class UpdateInternCommand : IRequest<UpdatedInternResponse>, ISecuredRequest
{
    public Guid Id { get; set; }
    public required string FullName { get; set; }
    public required string Location { get; set; }
    public required string Phone { get; set; }
    public required string Company { get; set; }
    public required string Department { get; set; }
    public required string Section { get; set; }
    public required string ResponsiblePerson { get; set; }
    public required string University { get; set; }
    public required string InternshipDays { get; set; }
    public required string ContactPerson { get; set; }
    public required string ContactPhone { get; set; }
    public required string WorkPlace { get; set; }
    public required string InternshipType { get; set; }
    public required string SchoolAdvisor { get; set; }
    public required string SchoolAdvisorPhone { get; set; }

    public string[] Roles => [Admin, Write, InternsOperationClaims.Update];

    public class UpdateInternCommandHandler : IRequestHandler<UpdateInternCommand, UpdatedInternResponse>
    {
        private readonly IMapper _mapper;
        private readonly IInternRepository _internRepository;
        private readonly InternBusinessRules _internBusinessRules;

        public UpdateInternCommandHandler(IMapper mapper, IInternRepository internRepository,
                                         InternBusinessRules internBusinessRules)
        {
            _mapper = mapper;
            _internRepository = internRepository;
            _internBusinessRules = internBusinessRules;
        }

        public async Task<UpdatedInternResponse> Handle(UpdateInternCommand request, CancellationToken cancellationToken)
        {
            Intern? intern = await _internRepository.GetAsync(predicate: i => i.Id == request.Id, cancellationToken: cancellationToken);
            await _internBusinessRules.InternShouldExistWhenSelected(intern);
            intern = _mapper.Map(request, intern);

            await _internRepository.UpdateAsync(intern!);

            UpdatedInternResponse response = _mapper.Map<UpdatedInternResponse>(intern);
            return response;
        }
    }
}