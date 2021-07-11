function generate(event){
    
    var x=document.getElementById('row').value;
    var y=document.getElementById('col').value;
    tableCreate(x,y);
     return false;

    

}

function tableCreate(x,y) {
    var body = document.body,
    tbl  = document.createElement('table');
    
    tbl.style.width  = '400px';
    tbl.style.height= '300px';
    
   
let index=1;
for(var i = 0; i < x; i++){
    var tr = tbl.insertRow();
    for(var j = 0; j < y; j++){
       
            var td = tr.insertCell();
            divChild=document.createElement('div');
            divChild.className='child';
            
            divChild.id=index++;
            td.appendChild(divChild);
            
           
            
        
    }
}
body.appendChild(tbl);

}

function changeColor()
{
    let id=document.getElementById('cellID').value;
    
    let color=document.getElementById('colorName').value;
    document.getElementById(id).style.backgroundColor=color;
    
    return false;

}