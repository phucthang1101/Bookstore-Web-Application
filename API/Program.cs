using System;
using API.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;

namespace API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();
            using var scope = host.Services.CreateScope();
            var context = scope.ServiceProvider.GetRequiredService<StoreContext>();

            var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();

            try
            {
                 context.Database.Migrate();
                 DbInitializer.Initialize(context);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Problem migrating data");
                
            }
            // instead of using this method we will initialize keyword "using" before var scope 
            // finally
            // {
            //     scopre.Dispose();
            // }

            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
