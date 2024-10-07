using Application.Features.Interns.Commands.Create;
using Application.Features.Interns.Commands.Delete;
using Application.Features.Interns.Commands.Update;
using Application.Features.Interns.Queries.GetById;
using Application.Features.Interns.Queries.GetList;
using NArchitecture.Core.Application.Requests;
using NArchitecture.Core.Application.Responses;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class InternsController : BaseController
{
    [HttpPost]
    public async Task<ActionResult<CreatedInternResponse>> Add([FromBody] CreateInternCommand command)
    {
        CreatedInternResponse response = await Mediator.Send(command);

        return CreatedAtAction(nameof(GetById), new { response.Id }, response);
    }

    [HttpPut]
    public async Task<ActionResult<UpdatedInternResponse>> Update([FromBody] UpdateInternCommand command)
    {
        UpdatedInternResponse response = await Mediator.Send(command);

        return Ok(response);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<DeletedInternResponse>> Delete([FromRoute] Guid id)
    {
        DeleteInternCommand command = new() { Id = id };

        DeletedInternResponse response = await Mediator.Send(command);

        return Ok(response);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<GetByIdInternResponse>> GetById([FromRoute] Guid id)
    {
        GetByIdInternQuery query = new() { Id = id };

        GetByIdInternResponse response = await Mediator.Send(query);

        return Ok(response);
    }

    [HttpGet]
    public async Task<ActionResult<GetListResponse<GetListInternListItemDto>>> GetList([FromQuery] PageRequest pageRequest)
    {
        GetListInternQuery query = new() { PageRequest = pageRequest };

        GetListResponse<GetListInternListItemDto> response = await Mediator.Send(query);

        return Ok(response);
    }
}