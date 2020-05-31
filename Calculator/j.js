const clearEach = () =>
{
    let value = document.getElementById('main').value;
    let arr = value.split("");
    value = "";
    arr.pop();
    arr.forEach(element => { value += element; });
    document.getElementById('main').value = value;
}

const empty = id => document.getElementById(id).value = '';

const square = () =>
{
    let value = document.getElementById('main').value;

    if(value) document.getElementById('main').value = value*value;
    else alert("input filed is empty");
}

const calculate = operator => 
{
    let value = document.getElementById('main').value;
    let history = document.getElementById('history').value;
    
    if(value && history)
    {
        let arr = history.split(" ");
        
        switch (arr[1])
        {
            case '+':
                document.getElementById('main').value = parseFloat(arr[0])+parseFloat(value);
                break;
            case '-':
            document.getElementById('main').value = parseFloat(arr[0])-parseFloat(value);
            break;
            case 'x':
                document.getElementById('main').value = parseFloat(arr[0])*parseFloat(value);
                break;
            case '/':
            document.getElementById('main').value = parseFloat(arr[0])/parseFloat(value);
            break;
        }
        empty('history');
    }
    else if(value)
    {
        document.getElementById('history').value = (value+" "+operator);
        empty('main');
    }
    else alert("input field is empty");
}

const isequal = () => 
{
    let value = document.getElementById('main').value;
    let history = document.getElementById('history').value;

    if(value && history)
    {
        let arr = history.split(" ");
        switch (arr[1])
        {
            case '+':
                document.getElementById('main').value = parseFloat(arr[0])+parseFloat(value);
                break;
            case '-':
            document.getElementById('main').value = parseFloat(arr[0])-parseFloat(value);
            break;
            case 'x':
                document.getElementById('main').value = parseFloat(arr[0])*parseFloat(value);
                break;
            case '/':
            document.getElementById('main').value = parseFloat(arr[0])/parseFloat(value);
            break;
        }
        
        empty('history');
    }
}

const numButton = () =>
{
    let arr = [7,8,9,4,5,6,1,2,3];

    arr.forEach(element => {
        document.getElementById('add-button').innerHTML += '<button class="btn-padd" onclick="numToInput('+element+')">'+element+'</button>';
    });

    arr = [0,'.'];

    arr.forEach(element => {
        document.getElementById('add-button1').innerHTML += "<button class='btn-padd' onclick='numToInput("+'"'+element+'"'+")'>"+element+"</button>";
    });
}

const operatorButton = () => 
{
    let arr = ['/','x','-','+','='];

    arr.forEach(element => {
        if(element == '=') document.getElementById('operationButton').innerHTML += "<button class='btn-padd f-width' onclick='isequal()'>"+element+"</button> <br>";
        else document.getElementById('operationButton').innerHTML += "<button class='btn-padd f-width' onclick='calculate("+'"'+element+'"'+")'>"+element+"</button> <br>"
    });
}

const numToInput = e => document.getElementById('main').value += e;

window.addEventListener("load", () =>
{
    numButton();
    operatorButton();
});