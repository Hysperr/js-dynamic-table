var num = 1;
var addBackFlag = false;
var addBackContent;

function addRow() {
    num++;
    var row = document.getElementById('my-table').insertRow(-1);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    if (addBackFlag)
    {
        cell0.innerHTML =
            '                <form>\n' +
            '                    <label for="tmp">\n' +
            '                        ' + num + '\n' +
            '                    </label>\n' +
            '                        <input id="tmp" type="text" value="' + addBackContent + '" oninput="countInputLength(this)">\n' +
            '                </form>';
        cell1.innerHTML = cell0.getElementsByTagName('input')[0].value.length;
        addBackFlag = false;
    }
    else
    {
        cell0.innerHTML =
            '                <form>\n' +
            '                    <label for="tmp">\n' +
            '                        ' + num + '\n' +
            '                    </label>\n' +
            '                        <input id="tmp" type="text" oninput="countInputLength(this)">\n' +
            '                </form>';
        cell1.innerHTML = cell0.getElementsByTagName('input')[0].value.length;
    }
}

function removeRow() {
    var table = document.getElementById('my-table');
    if (table.rows.length > 2) {
        var lastRow = table.rows[table.rows.length - 1];
        addBackContent = lastRow.getElementsByTagName('input')[0].value;
        addBackFlag = true;
        table.deleteRow(-1);
        num--;
    }
}

function countInputLength(obj) {
    addBackFlag = false;    // start typing, add back is no more!
    var table = document.getElementById('my-table');
    var idx = obj.parentNode.parentNode.parentNode.rowIndex;
    table.rows[idx].cells[1].innerHTML = table.rows[idx].cells[0].getElementsByTagName('input')[0].value.length;
}

function sortCells() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById('my-table');
    switching = true;
    while (switching) {
        switching = false;
        rows = table.getElementsByTagName('tr');
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].cells[0].getElementsByTagName('input')[0];
            y = rows[i + 1].cells[0].getElementsByTagName('input')[0];
            if (x.value.toLowerCase() > y.value.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
    var k;
    for (k = 1; k < rows.length; k++) {
        rows[k].cells[0].getElementsByTagName('label')[0].innerHTML = k;
    }
}