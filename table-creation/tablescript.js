
 var datalist = []
  function handlesubmit(){
    var data = {
	
	name: document.getElementById("Name").value,
	Email: document.getElementById("Email").value,
	Age: document.getElementById("Age").value,
   }
        datalist.push(data)
        console.log(datalist)
		genTable(data) 
   } 


  function genTable(data){
   var table = document.getElementById("datatable");
			var tr = document.createElement("tr");
			var td1 = document.createElement("td");
			td1.innerText = data.name;
			var td2 = document.createElement("td");
			td2.innerText = data.Email;
			var td3 = document.createElement("td");
			td3.innerText = data.Age;
			tr.appendChild(td1)
			tr.appendChild(td2)
			tr.appendChild(td3)
			
		
		table.appendChild(tr); 
	
	
}
	