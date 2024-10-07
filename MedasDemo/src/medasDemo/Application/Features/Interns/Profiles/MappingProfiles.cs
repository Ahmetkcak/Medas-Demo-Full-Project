using Application.Features.Interns.Commands.Create;
using Application.Features.Interns.Commands.Delete;
using Application.Features.Interns.Commands.Update;
using Application.Features.Interns.Queries.GetById;
using Application.Features.Interns.Queries.GetList;
using AutoMapper;
using NArchitecture.Core.Application.Responses;
using Domain.Entities;
using NArchitecture.Core.Persistence.Paging;

namespace Application.Features.Interns.Profiles;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<CreateInternCommand, Intern>();
        CreateMap<Intern, CreatedInternResponse>();

        CreateMap<UpdateInternCommand, Intern>();
        CreateMap<Intern, UpdatedInternResponse>();

        CreateMap<DeleteInternCommand, Intern>();
        CreateMap<Intern, DeletedInternResponse>();

        CreateMap<Intern, GetByIdInternResponse>();

        CreateMap<Intern, GetListInternListItemDto>();
        CreateMap<IPaginate<Intern>, GetListResponse<GetListInternListItemDto>>();
    }
}