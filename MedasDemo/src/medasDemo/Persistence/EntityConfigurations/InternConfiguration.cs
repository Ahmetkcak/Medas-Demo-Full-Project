using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.EntityConfigurations;

public class InternConfiguration : IEntityTypeConfiguration<Intern>
{
    public void Configure(EntityTypeBuilder<Intern> builder)
    {
        builder.ToTable("Interns").HasKey(i => i.Id);

        builder.Property(i => i.Id).HasColumnName("Id").IsRequired();
        builder.Property(i => i.FullName).HasColumnName("FullName").IsRequired();
        builder.Property(i => i.Location).HasColumnName("Location").IsRequired();
        builder.Property(i => i.Phone).HasColumnName("Phone").IsRequired();
        builder.Property(i => i.Company).HasColumnName("Company").IsRequired();
        builder.Property(i => i.Department).HasColumnName("Department").IsRequired();
        builder.Property(i => i.Section).HasColumnName("Section").IsRequired();
        builder.Property(i => i.ResponsiblePerson).HasColumnName("ResponsiblePerson").IsRequired();
        builder.Property(i => i.University).HasColumnName("University").IsRequired();
        builder.Property(i => i.InternshipDays).HasColumnName("InternshipDays").IsRequired();
        builder.Property(i => i.ContactPerson).HasColumnName("ContactPerson").IsRequired();
        builder.Property(i => i.ContactPhone).HasColumnName("ContactPhone").IsRequired();
        builder.Property(i => i.WorkPlace).HasColumnName("WorkPlace").IsRequired();
        builder.Property(i => i.InternshipType).HasColumnName("InternshipType").IsRequired();
        builder.Property(i => i.SchoolAdvisor).HasColumnName("SchoolAdvisor").IsRequired();
        builder.Property(i => i.SchoolAdvisorPhone).HasColumnName("SchoolAdvisorPhone").IsRequired();
        builder.Property(i => i.CreatedDate).HasColumnName("CreatedDate").IsRequired();
        builder.Property(i => i.UpdatedDate).HasColumnName("UpdatedDate");
        builder.Property(i => i.DeletedDate).HasColumnName("DeletedDate");

        builder.HasQueryFilter(i => !i.DeletedDate.HasValue);
    }
}