using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace ForeFrontUsers
{
    public class ForeFrontUser : IdentityUser
    {
        public bool IsAdmin => Roles.Any(x => x.RoleId == "admin");
    }
}
