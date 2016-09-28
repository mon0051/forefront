using System.Collections.Generic;

namespace ForeFrontCore.Data
{
    public class DummyData
    {
        public List<object> Data { get; set; } = new List<object>
        {
            "Value 1",
            new {name="Objer"},
            new {type="Redercint",arguments="plunder"}
        };
    }
}