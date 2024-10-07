using Application.Features.Interns.Constants;
using Application.Features.Interns.Rules;
using Application.Services.Repositories;
using AutoMapper;
using Domain.Entities;
using NArchitecture.Core.Application.Pipelines.Authorization;
using MediatR;
using static Application.Features.Interns.Constants.InternsOperationClaims;

namespace Application.Features.Interns.Queries.GetById;

public class GetByIdInternQuery : IRequest<GetByIdInternResponse>, ISecuredRequest
{
    public Guid Id { get; set; }

    public string[] Roles => [Admin, Read];

    public class GetByIdInternQueryHandler : IRequestHandler<GetByIdInternQuery, GetByIdInternResponse>
    {
        private readonly IMapper _mapper;
        private readonly IInternRepository _internRepository;
        private readonly InternBusinessRules _internBusinessRules;

        public GetByIdInternQueryHandler(IMapper mapper, IInternRepository internRepository, InternBusinessRules internBusinessRules)
        {
            _mapper = mapper;
            _internRepository = internRepository;
            _internBusinessRules = internBusinessRules;
        }

        public async Task<GetByIdInternResponse> Handle(GetByIdInternQuery request, CancellationToken cancellationToken)
        {
            Intern? intern = await _internRepository.GetAsync(predicate: i => i.Id == request.Id, cancellationToken: cancellationToken);
            await _internBusinessRules.InternShouldExistWhenSelected(intern);

            GetByIdInternResponse response = _mapper.Map<GetByIdInternResponse>(intern);
            return response;
        }
    }
}