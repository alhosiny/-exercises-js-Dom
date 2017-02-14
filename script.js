//get form element
//add event listener
//fire alert
/*document.getElementById("form").addEventListener("submit", myFunction);*/

function myFunction(){
                var Tasks_table = document.getElementById("Tasks");
                var row =  Tasks_table.insertRow(Tasks_table.length);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                
                cell1.innerHTML = document.getElementById("category").value;
                cell2.innerHTML = document.getElementById("Title").value;
                cell3.innerHTML = document.getElementById("periorty").value;
                cell4.innerHTML = document.getElementById("Estimate").value;
                
                document.getElementById("form").reset();
}