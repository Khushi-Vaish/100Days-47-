var table = document.getElementById("tableid");
if(table !=null)
{
    for(var i=0 ; i<table.rows.length; i++)
    {
        for(var j=0 ; j<table.rows[i].cells.length ; j++)
        table.rows[i].cells[j].onclick=
        function()
        {
            if(this.style.backgroundColor == "red")
            this.style.backgroundColor = "white";
            else
            this.style.backgroundColor = "red";
        };
    }
}
