using Application.Features.Interns.Constants;
using Application.Features.Interns.Rules;
using Application.Services.Repositories;
using AutoMapper;
using Domain.Entities;
using NArchitecture.Core.Application.Pipelines.Authorization;
using MediatR;
using static Application.Features.Interns.Constants.InternsOperationClaims;

namespace Application.Features.Interns.Commands.Create;

public class CreateInternCommand : IRequest<CreatedInternResponse>, ISecuredRequest
{
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

    public string[] Roles => [Admin, Write, InternsOperationClaims.Create];

    public class CreateInternCommandHandler : IRequestHandler<CreateInternCommand, CreatedInternResponse>
    {
        private readonly IMapper _mapper;
        private readonly IInternRepository _internRepository;
        private readonly InternBusinessRules _internBusinessRules;

        public CreateInternCommandHandler(IMapper mapper, IInternRepository internRepository,
                                         InternBusinessRules internBusinessRules)
        {
            _mapper = mapper;
            _internRepository = internRepository;
            _internBusinessRules = internBusinessRules;
        }

        public async Task<CreatedInternResponse> Handle(CreateInternCommand request, CancellationToken cancellationToken)
        {
            Intern intern = _mapper.Map<Intern>(request);

            await _internRepository.AddAsync(intern);

            CreatedInternResponse response = _mapper.Map<CreatedInternResponse>(intern);
            return response;
        }
    }
}