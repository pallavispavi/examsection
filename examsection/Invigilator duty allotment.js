function Invigilationdutyallotment(sub,name){
	this.sub=sub;
	this.name=name;
	

}

function Display(){
	
} 
Display.prototype.add=function(invigilation){
	tablebody = document.getElementById('tablebody');
	let uiString=`<tr> 
					<td>${invigilation.sub}</td> 
					<td>${invigilation.name}</td> 
				 
				</tr>`;
	tablebody.innerHTML+=uiString;
	
	
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
	
	


let examsec = document.getElementById('examsec');
examsec.addEventListener('submit',formsubmit); 


function formsubmit(e){
	let sub=document.getElementById('sub').value;
	let name=document.getElementById('name').value;
	
	
	let invigilation=new Invigilationdutyallotment(sub,name);
	let display=new Display();
	if(display.validate(invigilation)){
		display.add(invigilation);
		display.clear();
		display.show('success','successfully added')
	}
	else {
		display.show('error','sorry cannot add this')
	}
	
	e.preventDefault();
}
	
	