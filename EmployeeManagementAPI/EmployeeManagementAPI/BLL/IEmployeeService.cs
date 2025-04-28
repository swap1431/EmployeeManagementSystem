using EmployeeManagementAPI.models;

namespace EmployeeManagementAPI.BLL;

public interface IEmployeeService
{
    Task<List<Employee>> GetAllAsync();
    Task<Employee> GetByIdAsync(int id);
    Task AddAsync(Employee emp);
    Task UpdateAsync(Employee emp);
    Task DeleteAsync(int id);
    Task<List<State>> GetStatesAsync();
    Task<bool> IsDuplicateAsync(string name, DateTime dob);
}
