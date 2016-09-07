using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ForeFrontCore.Data;
using Microsoft.AspNetCore.Mvc;

namespace ForeFrontCore.Controllers
{
    [Route("api/values")]
    public class ValuesController : Controller
    {
        private DummyData data = new DummyData();

        // GET api/values
        [HttpGet]
        public IEnumerable<object> Get()
        {
            return data.Data;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
