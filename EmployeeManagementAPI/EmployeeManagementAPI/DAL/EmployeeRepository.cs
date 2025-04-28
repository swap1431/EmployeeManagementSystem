using Microsoft.EntityFrameworkCore;
using EmployeeManagementAPI.Data;
using EmployeeManagementAPI.models;

namespace EmployeeManagementAPI.DAL;

public class EmployeeRepository : IEmployeeRepository
{
    private readonly AppDbContext _context;

    public EmployeeRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<List<Employee>> GetAllAsync() => await _context.Employees.ToListAsync();

    public async Task<Employee> GetByIdAsync(int id) => await _context.Employees.FindAsync(id);

    public async Task AddAsync(Employee emp)
    {
        _context.Employees.Add(emp);
        await _context.SaveChangesAsync();
    }

    public async Task UpdateAsync(Employee emp)
    {
        _context.Employees.Update(emp);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(int id)
    {
        var emp = await _context.Employees.FindAsync(id);
        if (emp != null)
        {
            _context.Employees.Remove(emp);
            await _context.SaveChangesAsync();
        }
    }

    public async Task<List<State>> GetStatesAsync() => await _context.States.ToListAsync();

    public async Task<bool> IsDuplicateAsync(string name, DateTime dob) =>
        await _context.Employees.AnyAsync(e => e.Name == name && e.DateOfBirth == dob);
}

