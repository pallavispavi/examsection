



function Roomallotment(roomno,branch,usn){
	this.roomno=roomno;
	this.branch=branch;
	this.usn=usn;

}

function Display(){
	
} 
Display.prototype.add=function(roomallotment){
	tablebody = document.getElementById('tablebody');
	let uiString=`<tr> 
					<td>${roomallotment.roomno}</td> 
					<td>${roomallotment.branch}</td> 
					<td>${roomallotment.usn}</td> 
				</tr>`;
	tablebody.innerHTML+=uiString;
	
	
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
examsec.addEventListener('submit',formsubmit); 


function formsubmit(e){
	let roomno=document.getElementById('RoomNo').value;
	let branch=document.getElementById('branch').value;
	
	let usn=document.getElementById('usn').value;
	let roomallotment=new Roomallotment(roomno,branch,usn);
	let display=new Display();
	if(display.validate(roomallotment)){
		display.add(roomallotment);
		display.clear();
		display.show('success','successfully added')
	}
	else {
		display.show('error','sorry cannot add this')
	}
	
	e.preventDefault();
}
	
	