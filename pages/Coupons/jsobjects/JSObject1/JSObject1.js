export default {
	myVar1: [],
	myVar2: {},
	validDateFormat: (valid_date) => {
		//write code here
		let format = valid_date.slice(0,19);
		return format;
	},
	createCouponFunction: async () => {
		//use async-await or promises
		if(Code_input.text != "" && minProductPrice_input.text != "" && discount_percentage_input.text != "" && price_input.text != "" && discount_type_input.text != "" && max_discount_input.text != "" && valid_from_input.formattedDate != "" && valid_till_input.formattedDate != "" && active_input.text != "" && total_coupons_input.text != "" && userFrequency_input.text != ""){
			await AddCoupon.run();
			if(AddCoupon.data[0].affectedRows == 1){
				showModal("Creation_coupon_success");
			}else{
				showModal("Failure_modal");
			}
		}
	},
	ChangeStatus : (active)=>{
		if(active == 1){
			return 0;
		}
		if(active==0){
			return 1;
		}
	},
	changeStatusFeedback : async ()=>{
		await change_active_coupon.run();
		if(change_active_coupon.data[0].affectedRows == 0){
			showModal("Failure_modal");
		}if(change_active_coupon.data[0].affectedRows == 1){
			showModal("active_success_modal");
			Attempts_list.run();
		}
	},
	EditSearchCoupon :async ()=>{
	if(editCoupon_input != ""){
		EditFindCoupon.run();
		Text35.text = "hello";
	}
}
}