function Invigilationdutyallotment(sub,name){
	this.sub=sub;
	this.name=name;
	

}

function Display(){
	
} 
Display.prototype.add=function(invigilation){
	tablebody = document.getElementById('tablebody');
	let list1;
	if(localStorage.getItem('list1')===null){
		list1=[]
	}
	else{
		list1=JSON.parse(localStorage.getItem('list1'))
	}
	list1.forEach(function(element,index){
		
	let uiString=`<tr> 
					<td>${element.sub}</td> 
					<td>${element.name}</td> 
				 <td><button class="b1" id="${index}">Edit</button></td> 
					 <td><button class="b2" id="${index}">Delete</button></td> 
				</tr>`;
	tablebody.innerHTML+=uiString;
	});
	
	
}
	
Display.prototype.clear=function() {
	let examsec=document.getElementById('examsec');
	examsec.reset();
}





Display.prototype.validate=function(invigilation) {
	if (invigilation.sub.length<1||invigilation.name.length<1)
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
	
	

let sub=document.getElementById('sub').value;
	let name=document.getElementById('name').value;
	
	
	let invigilation=new Invigilationdutyallotment(sub,name);
	let display=new Display();
	document.onload=display.add(invigilation);
let examsec = document.getElementById('examsec');
tablebody.addEventListener('click',remove);
examsec.addEventListener('submit',formsubmit); 

function remove(e){
	e.preventDefault(); 
	let list1;
	
	if(localStorage.getItem('list1')==null){
		list1=[]
	}
	else{ 
	list1=JSON.parse(localStorage.getItem('list1'));
	} 
	console.log(e.target.id); 
	if(e.target.classList.contains('b2')){
	let key=localStorage.key(e.target.id);
	list1.splice(e.target.id,1);
	localStorage.setItem('list1',JSON.stringify(list1));
	e.target.parentNode.parentNode.remove();
	}
	else {
		if(e.target.classList.contains('b1')){ 
		let v=document.getElementById('edit');
		console.log(v);
		document.getElementById('sub').value=e.target.parentNode.parentNode.children[0].innerHTML;
		
	document.getElementById('name').value=e.target.parentNode.parentNode.children[1].innerHTML;
	
	v.innerText="EDIT";
	edititem=e;
		}
}
}
	


function formsubmit(e){
	e.preventDefault();
	let v=document.getElementById('edit');
	
	
	let sub=document.getElementById('sub').value;
	let name=document.getElementById('name').value;
	tablebody = document.getElementById('tablebody');
	
	let invigilation=new Invigilationdutyallotment(sub,name);
	let display=new Display();
	let list1;
	if(localStorage.getItem('list1')===null){
		list1=[]
	}
	else{
		list1=JSON.parse(localStorage.getItem('list1'))
	}
	
	if(v.innerText!='Add'){
		edititem.target.parentNode.parentNode.children[0].innerHTML=document.getElementById('sub').value;
	edititem.target.parentNode.parentNode.children[1].innerHTML=document.getElementById('name').value;
	
	 let roomno=document.getElementById('sub').value;
	let branch=document.getElementById('name').value;
	
	
	v.innerText="Add";
	
	list1[edititem.target.id].sub=sub;
	list1[edititem.target.id].name=name;
	
	localStorage.setItem('list1',JSON.stringify(list1)); 
	
	display.clear();	
	}
	
	else{	
		
	if(display.validate(invigilation)){
		let uiString=`<tr> 
					<td>${invigilation.sub}</td> 
					<td>${invigilation.name}</td> 
				 <td><button class="b1" >Edit</button></td> 
					 <td><button class="b2">Delete</button></td> 
				</tr>`;
				tablebody.innerHTML+=uiString;
				list1.push({sub:sub,
	name:name})
	localStorage.setItem('list1',JSON.stringify(list1)) 
	
		display.clear();
		display.show('success','successfully added')
	}
	else {
		display.show('error','sorry cannot add this')
	}
	}
	
	
}
	
	