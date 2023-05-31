export default {
	myVar1: [],
	myVar2: {},
	vaild_till: () => {
			const start_Date_format = new Date(subs_start_input.formattedDate);
		let subs_end_date = new Date(31536000000 + start_Date_format.getTime());
		return subs_end_date.toISOString();
	},
	nextYear :()=>{
// Print the result
var currentDate = new Date(subs_start_input.formattedDate);
// Add one year
currentDate.setFullYear(currentDate.getFullYear() + 1);
		
return currentDate.toISOString();
	},
	selected_Date :()=>{
		var date = new Date(subs_start_input.formattedDate);
		date.setDate(date.getDate() + 1)
		return date
	},
}