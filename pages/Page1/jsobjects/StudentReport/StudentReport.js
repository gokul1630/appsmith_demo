export default {
	
getData:()=>{
let comp=0;
	let notCompleted=0;
	StudentReportApi.data.map(({completed})=>{
		if(completed)
		{ comp+=1}
		else{
			notCompleted+=1
		}
	})
return [{x: "completed",y:comp },{x: "notCompleted",y:notCompleted }]
},

getDropDownData:()=>{
return	StudentReportApi.data.map(({id,title})=>{return{label:title,value:id}})
}

}

