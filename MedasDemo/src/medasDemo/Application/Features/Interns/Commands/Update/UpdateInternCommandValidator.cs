using FluentValidation;

namespace Application.Features.Interns.Commands.Update;

public class UpdateInternCommandValidator : AbstractValidator<UpdateInternCommand>
{
    public UpdateInternCommandValidator()
    {
        RuleFor(c => c.Id).NotEmpty();
        RuleFor(c => c.FullName).NotEmpty();
        RuleFor(c => c.Location).NotEmpty();
        RuleFor(c => c.Phone).NotEmpty();
        RuleFor(c => c.Company).NotEmpty();
        RuleFor(c => c.Department).NotEmpty();
        RuleFor(c => c.Section).NotEmpty();
        RuleFor(c => c.ResponsiblePerson).NotEmpty();
        RuleFor(c => c.University).NotEmpty();
        RuleFor(c => c.InternshipDays).NotEmpty();
        RuleFor(c => c.ContactPerson).NotEmpty();
        RuleFor(c => c.ContactPhone).NotEmpty();
        RuleFor(c => c.WorkPlace).NotEmpty();
        RuleFor(c => c.InternshipType).NotEmpty();
        RuleFor(c => c.SchoolAdvisor).NotEmpty();
        RuleFor(c => c.SchoolAdvisorPhone).NotEmpty();
    }
}