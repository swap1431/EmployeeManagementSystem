using Microsoft.AspNetCore.Mvc;
using EmployeeManagementAPI.BLL;
using EmployeeManagementAPI.models;

namespace EmployeeManagementAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EmployeeController : ControllerBase
{
    private readonly IEmployeeService _service;

    public EmployeeController(IEmployeeService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll() => Ok(await _service.GetAllAsync());

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id) => Ok(await _service.GetByIdAsync(id));

    [HttpPost]
    public async Task<IActionResult> Create(Employee emp)
    {
        if (await _service.IsDuplicateAsync(emp.Name, emp.DateOfBirth))
            return BadRequest("Duplicate employee.");

        await _service.AddAsync(emp);
        return Ok("Created");
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, Employee emp)
    {
        if (id != emp.Id) return BadRequest("ID mismatch");
        await _service.UpdateAsync(emp);
        return Ok("Updated");
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        await _service.DeleteAsync(id);
        return Ok("Deleted");
    }

    [HttpGet("states")]
    public async Task<IActionResult> GetStates() => Ok(await _service.GetStatesAsync());

    [HttpGet("check-duplicate")]
    public async Task<IActionResult> CheckDuplicate(string name, DateTime dob) =>
        Ok(await _service.IsDuplicateAsync(name, dob));
}
