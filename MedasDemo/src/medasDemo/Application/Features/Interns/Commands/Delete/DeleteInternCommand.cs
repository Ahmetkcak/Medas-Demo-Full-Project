using Application.Features.Interns.Constants;
using Application.Features.Interns.Constants;
using Application.Features.Interns.Rules;
using Application.Services.Repositories;
using AutoMapper;
using Domain.Entities;
using NArchitecture.Core.Application.Pipelines.Authorization;
using MediatR;
using static Application.Features.Interns.Constants.InternsOperationClaims;

namespace Application.Features.Interns.Commands.Delete;

public class DeleteInternCommand : IRequest<DeletedInternResponse>, ISecuredRequest
{
    public Guid Id { get; set; }

    public string[] Roles => [Admin, Write, InternsOperationClaims.Delete];

    public class DeleteInternCommandHandler : IRequestHandler<DeleteInternCommand, DeletedInternResponse>
    {
        private readonly IMapper _mapper;
        private readonly IInternRepository _internRepository;
        private readonly InternBusinessRules _internBusinessRules;

        public DeleteInternCommandHandler(IMapper mapper, IInternRepository internRepository,
                                         InternBusinessRules internBusinessRules)
        {
            _mapper = mapper;
            _internRepository = internRepository;
            _internBusinessRules = internBusinessRules;
        }

        public async Task<DeletedInternResponse> Handle(DeleteInternCommand request, CancellationToken cancellationToken)
        {
            Intern? intern = await _internRepository.GetAsync(predicate: i => i.Id == request.Id, cancellationToken: cancellationToken);
            await _internBusinessRules.InternShouldExistWhenSelected(intern);

            await _internRepository.DeleteAsync(intern!);

            DeletedInternResponse response = _mapper.Map<DeletedInternResponse>(intern);
            return response;
        }
    }
}