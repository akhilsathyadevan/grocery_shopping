function ajax()
{

    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
            var response=JSON.parse(this.responseText);
            var Grocery=response.grocery;
            var output="";
            
                output +="<tr>"+ 
                    "<th>"+ "Sl No" +"</th>"+
                    "<th>"+ "Name "+"</th>"+
                    "<th>"+ "Quantity" +"</th>"+
                    "<th>"+ "Unit" +"</th>"+
                    "<th>"+ "Department" +"</th>"+
                    "<th>"+ "Notes" +"</th>"
                +"<tr>";
              

            for(var i=0;i<Grocery.length;i++){
            output +="<tr>"+ 
                "<td>"+ Grocery[i].sino +"</td>"+
                "<td>"+ Grocery[i].name +"</td>"+
                "<td>"+ Grocery[i].quantity +"</td>"+
                "<td>"+ Grocery[i].unit +"</td>"+
                "<td>"+ Grocery[i].department +"</td>"+
                "<td>"+ Grocery[i].notes +"</td>"
            +"<tr>";
               
           
            }
            console.log(output);
            document.getElementById("tbl").innerHTML=output;
           
         }
    
    }
    xhttp.open("GET","grocery.json",true);
    xhttp.send();
}