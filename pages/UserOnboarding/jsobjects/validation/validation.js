export default {
	myVar1: [],
	myVar2: {},
	validateUSerInfo: async () => {
		//write code here
		if(createUser_phonenumber.text != "" && createUser_Name.text != "" && createUser_Address.text != "" && installation_date.formattedDate != ""){
			await find_user.run();
			if(!find_user.data.length){
				await create_new_user.run();
				if(create_new_user.data.length){
					await find_user.run();
					showModal("userCreationSuccess_modal");
			}else{
				showModal("Creation_User_Failure");
			}
			}else{
				showModal("Creation_User_Failure");
			}
		}else{
			showModal("emptyValues_modal");
		}
	},
	validateDeviceinfo: async () => {
		//write code here
		if(id.text != "" && macid.text != ""){
			await find_device.run();
			if(!find_device.data.length){
				await create_mapping_device.run();
				if(create_mapping_device.data.length){
					await find_device.run();
					showModal("userMappingSuccess_modal");
			}else{
				showModal("Creation_Mapping_Failure");
			}
			}else{
				showModal("Creation_Mapping_Failure");
			}
		}else{
			showModal("emptyValues_modal1");
		}
	},
	myFun2: async () => {
		//use async-await or promises
	}
}