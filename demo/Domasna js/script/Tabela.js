//
/*
    function generateTable() {  
    const rows = document.getElementById('rows').value;  
    const cols = document.getElementById('cols').value;  
    let table = "table";  
    for (let i = 0; i< rows; i++) {  
    table += 'tr';  
    for (let j = 0; j < cols; j++) {  
    table += (`<td>Row ${i + 1}, Column ${j + 1}</td>`);  
    }  
    table += 'tr';  
    }  
    table += 'table';  
    consttableContainer = document.getElementById('table-container');  
    tabletableContainer.innerHTML = "table-container";  
    result.generateTable = tabletableContainer
    }  
    */

    function generateTable () {

        String.prototype.repeat = function(n) {
            return new Array(n + 1).join(this); 
        }
        
              
            for (i = 0; i < col; i++) {
                $('#tabelas tr:last').after(table)};
                generateTableBtn.addEventListener{"click", function(){$('table').empty()}
                    var col = parseInt($('#Coloms').val());
                    var row = parseInt($('#Row').val());
                    var head = "<th>Heading</th>".repeat(row);
                    var tableHead = "<tr>" + head + "</tr>"
                    var tableData = "<td>Cookies</td>".repeat(row);
                    var tableRow = "<tr>" + tableData + "</tr>";
                    var table = tableRow};