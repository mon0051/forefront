using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ForeFrontUsers
{
    public class ForeFrontUserManagement
    {
        private IAuthenticationSource _authenticator { get; set; }

        public ForeFrontUserManagement(IAuthenticationSource authenticator)
        {
            _authenticator = authenticator;
        }
    }

    public interface IAuthenticationSource
    {
    }
}
