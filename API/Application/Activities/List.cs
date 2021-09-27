using Application.Core;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Activities
{
    public class List
    {

        public class Query : IRequest<Result<List<ActivityDto>>> { }

        public class Handler : IRequestHandler<Query, Result<List<ActivityDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<Result<List<ActivityDto>>> Handle(Query request,
                CancellationToken cancellationToken)
            {
                var activites = await _context.Activities
                    .Include(x => x.Attendees)
                    .ThenInclude(u => u.AppUser)
                    .ToListAsync(cancellationToken);

                var activitesToReturn = _mapper.Map<List<ActivityDto>>(activites);

                return Result<List<ActivityDto>>.Success(activitesToReturn);
            }
        }
    }
}
