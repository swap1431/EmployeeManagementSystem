using EmployeeManagementAPI.DAL;
using EmployeeManagementAPI.models;

namespace EmployeeManagementAPI.BLL;

public class EmployeeService : IEmployeeService
{
    private readonly IEmployeeRepository _repo;

    public EmployeeService(IEmployeeRepository repo)
    {
        _repo = repo;
    }

    public Task<List<Employee>> GetAllAsync() => _repo.GetAllAsync();
    public Task<Employee> GetByIdAsync(int id) => _repo.GetByIdAsync(id);
    public Task AddAsync(Employee emp) => _repo.AddAsync(emp);
    public Task UpdateAsync(Employee emp) => _repo.UpdateAsync(emp);
    public Task DeleteAsync(int id) => _repo.DeleteAsync(id);
    public Task<List<State>> GetStatesAsync() => _repo.GetStatesAsync();
    public Task<bool> IsDuplicateAsync(string name, DateTime dob) => _repo.IsDuplicateAsync(name, dob);
}
