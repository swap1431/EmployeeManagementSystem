using Microsoft.EntityFrameworkCore;
using EmployeeManagementAPI.models;

namespace EmployeeManagementAPI.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Employee> Employees { get; set; }
    public DbSet<State> States { get; set; }
}