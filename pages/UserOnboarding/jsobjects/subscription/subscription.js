export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
	},
	subs_submit_function: async () => {
		//use async-await or promises
		if(subs_phonenumber_input.text != "" && subs_userId_input.text != "" && subs_end_input.text != "" && subs_plan_input.text != "" && subs_start_input.formattedDate != ""){
			await find_subs.run();
			if(find_subs.data.length==0){
				await create_subscription.run();
				if(create_subscription.data.length >0){
					showModal("Subs_Success");
				}else{
					showModal("Failure_modal");
				}
			}else if(find_subs.data.length >= 1){
				showModal("Creation_User_Failure");
			}else{
				showModal("Failure_modal");
			}
		}else{
			showModal("emptyValues_modal");
		}
	},
	Three_subs_submit_function: async () => {
		//use async-await or promises
		if(Input1.text != "" && Input2.text != "" && DatePicker1.selectedDate != "" && Input5.text != "" && Input6.text != ""){
			await findSub_T.run();
			if(findSub_T.data.length==0){
				await Sub_for3years.run();
				if(Sub_for3years.data.length >0){
					showModal("Subs_Success");
				}else{
					showModal("Failure_modal");
				}
			}else if(findSub_T.data.length >= 1){
				showModal("Creation_User_Failure");
			}else{
				showModal("Failure_modal");
			}
		}else{
			showModal("emptyValues_modal");
		}
	},
	
}
