



function Roomallotment(roomno,branch,usn){
	this.roomno=roomno;
	this.branch=branch;
	this.usn=usn;

}

function Display(){
	
} 
Display.prototype.add=function(roomallotment){
	tablebody = document.getElementById('tablebody'); 
	let list;
	let uiString;
	if(localStorage.getItem('list')==null){
		list=[]
	}
	else{ 
	list=JSON.parse(localStorage.getItem('list'));
	} 
	if(localStorage.getItem('list')!=undefined){
	list.forEach(function(element,index){ 
	console.log(index); 
	console.log(uiString);
	uiString=`<tr> 
					<td>${element.roomno}</td> 
					<td>${element.branch}</td> 
					<td>${element.usn}</td> 
					 
					 <td><button class='b1' id='${index}'>Edit</button></td> 
					 <td><button class='b2' id="${index}">Delete</button></td> 
					
				</tr>`; 
	tablebody.innerHTML+=uiString; 
	}); 
	
	} 
	
	
	
	
}
	
Display.prototype.clear=function() {
	let examsec=document.getElementById('examsec');
	examsec.reset();
}





Display.prototype.validate=function(roomallotment) {
	if (roomallotment.roomno.length<2||roomallotment.branch.length<2||roomallotment.usn.length<2)
	{
	    return false;
	}
	else{
		return true;
	}
}

Display.prototype.show=function(type,displaymessage){
	let message=document.getElementById('message');
	message.innerHTML=`<div class="alert alert-${type} alert-warning alert-dismissible fade show" role="alert">
  <strong>message:</strong> ${displaymessage}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;

setTimeout(function(){
message.innerHTML=''},2000);
}
	

	


let examsec = document.getElementById('examsec'); 
let tablebody = document.getElementById('tablebody');
let roomno=document.getElementById('RoomNo').value;
	let branch=document.getElementById('branch').value;
	
	let usn=document.getElementById('usn').value;
	let roomallotment=new Roomallotment(roomno,branch,usn);
	let display=new Display(); 
	document.onload=display.add(roomallotment);
tablebody.addEventListener('click',remove);
examsec.addEventListener('submit',formsubmit); 
//document.onload=display.add(roomallotment);

function remove(e){
	e.preventDefault(); 
	let list;
	
	if(localStorage.getItem('list')==null){
		list=[]
	}
	else{ 
	list=JSON.parse(localStorage.getItem('list'));
	} 
	console.log(e.target.id); 
	if(e.target.classList.contains('b2')){
	let key=localStorage.key(e.target.id);
	list.splice(e.target.id,1);
	localStorage.setItem('list',JSON.stringify(list));
	e.target.parentNode.parentNode.remove();
	}
	else {
		if(e.target.classList.contains('b1')){ 
		let v=document.getElementById('edit');
		console.log(v);
		document.getElementById('RoomNo').value=e.target.parentNode.parentNode.children[0].innerHTML;
		
	document.getElementById('branch').value=e.target.parentNode.parentNode.children[1].innerHTML;
	document.getElementById('usn').value=e.target.parentNode.parentNode.children[2].innerHTML; 
	v.innerText="EDIT";
	edititem=e;
		}
	}
	
		
			
			
	 
} 



function formsubmit(e){ 
e.preventDefault();
 let roomno=document.getElementById('RoomNo').value;
	let branch=document.getElementById('branch').value;
	
	let usn=document.getElementById('usn').value;
	let roomallotment=new Roomallotment(roomno,branch,usn);
	let display=new Display(); 
	
	let list;
	let uiString;
	let v=document.getElementById('edit');
	console.log(v); 
	if(localStorage.getItem('list')==null){
		list=[]
	}
	
	else{ 
	
		list=JSON.parse(localStorage.getItem('list'));
	} 
	
	if(v.innerText!="Add"){ 
	edititem.target.parentNode.parentNode.children[0].innerHTML=document.getElementById('RoomNo').value;
	edititem.target.parentNode.parentNode.children[1].innerHTML=document.getElementById('branch').value;
	edititem.target.parentNode.parentNode.children[2].innerHTML=document.getElementById('usn').value;
	 let roomno=document.getElementById('RoomNo').value;
	let branch=document.getElementById('branch').value;
	
	let usn=document.getElementById('usn').value;
	v.innerText="Add";
	
	list[edititem.target.id].roomno=roomno;
	list[edititem.target.id].branch=branch;
	list[edititem.target.id].usn=usn;
	localStorage.setItem('list',JSON.stringify(list)); 
	
	display.clear();	
	}
	
	
	else{
		
		
	
	
	
	if(display.validate(roomallotment)){
		
	
	
	
		uiString=`<tr> 
					<td>${roomallotment.roomno}</td> 
					<td>${roomallotment.branch}</td> 
					<td>${roomallotment.usn}</td> 
					 
					 <td><button class='b1' >Edit</button></td> 
					 <td><button class='b2'>Delete</button></td> 
					
				</tr>`; 
	console.log(uiString); 
	list.push({
		roomno:roomno,
		branch:branch,
		usn:usn
	})
	localStorage.setItem('list',JSON.stringify(list)); 
	
	
	if(uiString!=undefined){
	
	
	tablebody.innerHTML+=uiString; 
	}
		display.clear();
		display.show('success','successfully added')
	}
	else {
		display.show('error','sorry cannot add this')
	}
	
	
	}
}
	
	