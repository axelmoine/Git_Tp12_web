 window.onload=function(){
    tableauId = getAllId();
    display(tableauId);
}

 function move(xId)
 {
    alert(xId);
 }

 function mix() {
     alert("mix");
 }

 function getAllId() {
    idTable = []
    counter = 0;
    for (let i = 1; i<5; i++)
    {
        for (let j = 1; j<8 ; j++)
        {
            truc = j+i*10;
            idTable[counter]=truc;
            counter++;
        }
        
    }
    return idTable;
}

function display(tabL) {
    posAbeille = 11;
    for (id in tabL)
    {
        document.getElementById(tabL[id]).style.backgroundImage = "url('./images/"+id+".jpg')";
        document.getElementById(posAbeille).style.backgroundImage = "";
    }
}