var itemList = [];
var items = document.getElementById("itemList");
const inputitem = document.getElementById("item");

var addBtn = document.getElementById("add");
addBtn.addEventListener("click", addList);

function addList(){
    var item = document.getElementById("item").value;
    if(item != null){
        itemList.push(item);
        item.value= "";
        item.focus;
    }
    showList();
}

function showList(){
    var list = "<ul>";
    for (var i=0; i<itemList.length; i++){ //배열 요소마다 반복
        list += "<li>" + itemList[i] + "<span class='close' id=" + i +">X</span></li>";
    }
    list += "</ul>"; //목록을 끝내는 ul 태그 적용
    inputitem.value="";
    items.innerHTML=list;
    
    var remove = document.querySelectorAll(".close");
    for (var i=0; i<remove.length; i++) {
        remove[i].addEventListener("click", removeList);
    }
}

function removeList(){
    var id = this.getAttribute("id"); //this(누른 삭제 버튼)의 id 값 가져와 id 변수에 저장
    itemList.splice(id, 1); //인덱스 값이 id인 요소 1개 삭제
    showList(); 
}