using NArchitecture.Core.Application.Responses;

namespace Application.Features.Interns.Commands.Delete;

public class DeletedInternResponse : IResponse
{
    public Guid Id { get; set; }
}