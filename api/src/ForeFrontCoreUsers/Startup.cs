using System.IO;
using System.Security.Cryptography.X509Certificates;
using ForeFrontCore.Db;
using IdentityModel;
using IdentityServer4.Services;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using static System.IO.Path;

namespace ForeFrontUsers
{
    public class Startup
    {
        public IConfigurationRoot Config { get; set; }
        private IHostingEnvironment _env;

        public Startup(IHostingEnvironment env, IWebHostBuilder web, IConfigurationSource config)
        {
            _env = env;

            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("app-settings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"app-settings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();

            Config = builder.Build();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ForeFrontDbContext>(o=> 
                o.UseSqlServer(Config.GetConnectionString("DefaultConnection")));

            services.AddIdentity<ForeFrontUser, IdentityRole>()
                .AddEntityFrameworkStores<ForeFrontDbContext>()
                .AddDefaultTokenProviders();

            services.AddMvc();

            services.AddTransient<IProfileService, ForeFrontProfileService>();
        }
    }
}