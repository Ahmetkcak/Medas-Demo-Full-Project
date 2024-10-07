using FluentValidation;

namespace Application.Features.Interns.Commands.Delete;

public class DeleteInternCommandValidator : AbstractValidator<DeleteInternCommand>
{
    public DeleteInternCommandValidator()
    {
        RuleFor(c => c.Id).NotEmpty();
    }
}