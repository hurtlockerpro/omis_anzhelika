

let multiplyTable = document.getElementById('multiplyTable')

let rowCount = 15
let colCount = 10

let table = ''
let tr = ''
let td = ''
let th = '<th></th>'
let rowTh = ''


for (let rowIndex = 1; rowIndex <= rowCount; rowIndex++) {
    //console.log(rowIndex); 
    td = ''
    for (let colIndex = 1; colIndex <= colCount; colIndex++) {
        console.log(rowIndex + '*' + colIndex + '=' + multiplyNumbers(rowIndex, colIndex));   

        if (rowIndex == 1){
            let newTh = newElement('th', colIndex)
            newTh.setAttribute('scope', 'col')
            th += newTh.outerHTML
        }
        if (colIndex == 1){
            let newRowTh = newElement('th', rowIndex)
            newRowTh.setAttribute('scope', 'row')
            rowTh += newRowTh.outerHTML;
        } else {
            rowTh = ''
        }

        td += rowTh + newElement('td', multiplyNumbers(rowIndex, colIndex)).outerHTML;
    }
    if (rowIndex == 1) tr += newElement('tr', th).outerHTML
    tr += newElement('tr', td).outerHTML
}

table = newElement('table', tr) // <table class="..">...</table>
table.classList.add('table', 'table-striped-columns') // ['a', 'b',]
multiplyTable.innerHTML = table.outerHTML

function multiplyNumbers(x, y)
{
    if (x >= 1 && y >= 1) return x * y
    return 'X & Y must be grater than 1'
}


function newElement(tagName, content){
    let element = document.createElement(tagName)
    element.innerHTML = content
    console.log(element.outerHTML);
    return element
}


