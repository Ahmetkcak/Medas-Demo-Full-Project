using NArchitecture.Core.Application.Responses;

namespace Application.Features.Interns.Queries.GetById;

public class GetByIdInternResponse : IResponse
{
    public Guid Id { get; set; }
    public string FullName { get; set; }
    public string Location { get; set; }
    public string Phone { get; set; }
    public string Company { get; set; }
    public string Department { get; set; }
    public string Section { get; set; }
    public string ResponsiblePerson { get; set; }
    public string University { get; set; }
    public string InternshipDays { get; set; }
    public string ContactPerson { get; set; }
    public string ContactPhone { get; set; }
    public string WorkPlace { get; set; }
    public string InternshipType { get; set; }
    public string SchoolAdvisor { get; set; }
    public string SchoolAdvisorPhone { get; set; }
}