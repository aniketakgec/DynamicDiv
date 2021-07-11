function generate(){
    
    var x=document.getElementById('row').value;
    var y=document.getElementById('col').value;
  
    tableCreate(x,y);
     return false;

    

}

function tableCreate(x,y) {
    
   
    
    let tableDiv=document.getElementById('tableDiv');
  
    
    tbl  = document.createElement('table');

    let margin=0;
    if(y==1)
    margin=45;
    else if(y==2)
    margin=38;
    else if(y==3)
    margin=35;
    else if(y==4)
    margin=30;
    else if( y==5)
    margin=25;
    else
    margin=10;
    
    tbl.style.width  = '400px';
    
    tbl.style.marginLeft=margin+'%';
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

tableDiv.insertAdjacentElement('beforeend', tbl);


}

function changeColor()
{
    let rowId=document.getElementById('rowID').value;
    let colId=document.getElementById('colID').value;

    var x=document.getElementById('row').value;
    var y=document.getElementById('col').value;
    
    if(rowId > x || rowId <0 || colId>y || colId<0)
    {
       
        document.getElementById('ValidationMessage').style.display='block';
       setTimeout(()=>{
        document.getElementById('ValidationMessage').style.display='none';
       },2500)
       
        return false;
        

    }
   
    
    
   
    let color=document.getElementById('colorName').value;
    
    
    let index=y*(Number(rowId )-1)+Number(colId);
  
    document.getElementById(index).style.backgroundColor=color;
    
    return false;

}