export default {
	myVar1: [],
	myVar2: {},
	myFun1: async () => {
		//write code here
		if(findMacId.data.length == 0){
			showModal('devNotFound_modal');
		}
	},
	myFun2: () => {
		if(updateMacId.data[0].affectedRows == 0){
			showModal('devNotFound_modal');
			return 0;
		}
		else if(updateMacId.data[0].affectedRows == 1)
		{
			showModal('Success_modal');
			return 1;
		}
	},
	updateDevice: async ()=>{
		if(mac_Id_Input.text != "" && user_id_input.text != ""){
			await updateMacId.run();
			DeviceMap.myFun2();
		}
	}
}