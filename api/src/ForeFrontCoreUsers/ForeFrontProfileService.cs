﻿using System.Threading.Tasks;
using IdentityServer4.Models;
using IdentityServer4.Services;

namespace ForeFrontUsers
{
    public class ForeFrontProfileService : IProfileService
    {
        public Task GetProfileDataAsync(ProfileDataRequestContext context)
        {
            throw new System.NotImplementedException();
        }

        public Task IsActiveAsync(IsActiveContext context)
        {
            throw new System.NotImplementedException();
        }
    }
}