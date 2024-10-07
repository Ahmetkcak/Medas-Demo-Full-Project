using Application.Features.Interns.Constants;
using Application.Services.Repositories;
using AutoMapper;
using Domain.Entities;
using NArchitecture.Core.Application.Pipelines.Authorization;
using NArchitecture.Core.Application.Requests;
using NArchitecture.Core.Application.Responses;
using NArchitecture.Core.Persistence.Paging;
using MediatR;
using static Application.Features.Interns.Constants.InternsOperationClaims;

namespace Application.Features.Interns.Queries.GetList;

public class GetListInternQuery : IRequest<GetListResponse<GetListInternListItemDto>>, ISecuredRequest
{
    public PageRequest PageRequest { get; set; }

    public string[] Roles => [Admin, Read];

    public class GetListInternQueryHandler : IRequestHandler<GetListInternQuery, GetListResponse<GetListInternListItemDto>>
    {
        private readonly IInternRepository _internRepository;
        private readonly IMapper _mapper;

        public GetListInternQueryHandler(IInternRepository internRepository, IMapper mapper)
        {
            _internRepository = internRepository;
            _mapper = mapper;
        }

        public async Task<GetListResponse<GetListInternListItemDto>> Handle(GetListInternQuery request, CancellationToken cancellationToken)
        {
            IPaginate<Intern> interns = await _internRepository.GetListAsync(
                index: request.PageRequest.PageIndex,
                size: request.PageRequest.PageSize, 
                cancellationToken: cancellationToken
            );

            GetListResponse<GetListInternListItemDto> response = _mapper.Map<GetListResponse<GetListInternListItemDto>>(interns);
            return response;
        }
    }
}