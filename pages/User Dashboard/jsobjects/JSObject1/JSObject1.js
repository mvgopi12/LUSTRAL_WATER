export default {
	myVar1: [],
	myVar2: {},
	myFun3: () => {
		if(findMacId.data.length == 0){
			showModal('NotFound_Modal');
		}
	},
	myFun2: () => {
		//use async-await or promises
		if(updateMacId.data[0].affectedRows == 0){
			showModal('NotFound_Modal');
		}
		else if(updateMacId.data[0].affectedRows == 1)
		{
			showModal('Device_Success');
		}
	}
}