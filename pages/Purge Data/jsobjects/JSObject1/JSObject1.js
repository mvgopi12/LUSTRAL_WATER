export default {
	myVar1: [],
	myVar2: {},
	confirmationmodal: () => {
		//write code here
		if(newMacid_input.text != "" && newMacid_input.text != null && newMacid_input.text != oldmacId_input.text){
			showModal("updateConfirmation_modal");
		}else{
			showModal("nullValuesError_modal");
			resetWidget("Container1");
		}
	},
	searchMacFunction: async () => {
		//use async-await or promises
		if(oldmacId_input.text != ""){
			await searchMac_query.run();
			await findRecord.run();
			//return searchMac_query.data.length;
				if(searchMac_query.data[0].recordsFound == 0){
					showModal("deviceNotFound_Modal");
				}	
		}else{
			showModal("nullValuesError_modal");
		}
	},
	updateMacFunction : async()=>{
		if(newMacid_input.text != ""){
			await searchMac_query.run();
			if(searchMac_query.data[0].recordsFound > 0){
					await update_mac_query.run();
					if(update_mac_query.data[0].affectedRows > 0){
						showModal("updationSuccess_modal");
					}else{
						showModal("failure_modal");
					}
				}else{
					showModal("deviceNotFound_Modal");
				}
			return;
		}else{
						showModal("nullValuesError_modal");
			return;
					}
		showModal("failure_modal");
		return;
	},
	
}