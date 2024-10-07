using NArchitecture.Core.Persistence.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities;
public class Intern : Entity<Guid>
{
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

    public Intern()
    {
        FullName = string.Empty;
        Location = string.Empty;
        Phone = string.Empty;
        Company = string.Empty;
        Department = string.Empty;
        Section = string.Empty;
        ResponsiblePerson = string.Empty;
        University = string.Empty;
        InternshipDays = string.Empty;
        ContactPerson = string.Empty;
        ContactPhone = string.Empty;
        WorkPlace = string.Empty;
        InternshipType = string.Empty;
        SchoolAdvisor = string.Empty;
        SchoolAdvisorPhone = string.Empty;
    }

    public Intern(Guid id, string fullName, string location, string phone, string company, string department,
        string section, string responsiblePerson, string university, string internshipDays, string contactPerson,
        string contactPhone, string workPlace, string internshipType, string schoolAdvisor, string schoolAdvisorPhone)
        : base(id)
    {
        FullName = fullName;
        Location = location;
        Phone = phone;
        Company = company;
        Department = department;
        Section = section;
        ResponsiblePerson = responsiblePerson;
        University = university;
        InternshipDays = internshipDays;
        ContactPerson = contactPerson;
        ContactPhone = contactPhone;
        WorkPlace = workPlace;
        InternshipType = internshipType;
        SchoolAdvisor = schoolAdvisor;
        SchoolAdvisorPhone = schoolAdvisorPhone;
    }
}
