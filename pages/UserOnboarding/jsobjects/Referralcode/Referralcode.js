export default {
	myVar1: [],
	myVar2: {},
	generatecode: () => {
		//write code here
		let chars_code = '';
    let numbers_code ='';
    let temp_code ='';
    let code ='';
    let chars = 'ABCDEFGHIJKLMENOPQRSTUVXYZ';
    let numbers = '0123456789'
    let len1 = chars.length;
    let len2 = numbers.length;
        for(let i=0;i<3;i++){
            chars_code = chars_code + chars.charAt(Math.floor(Math.random()*len1));
        }
        for(var i=0;i<3;i++){
            numbers_code = numbers_code + numbers.charAt(Math.floor(Math.random()*len2));
        }
        temp_code = chars_code.concat(numbers_code);
        for(let i=0;i<6;i++){
            code = code + temp_code.charAt(Math.floor(Math.random()*6));
        }  
    return code;
	},
	myFun2: async () => {
		//use async-await or promises
		while(true){
			var code = Referralcode.generatecode();
			await uniqueCode.run(code);
			if(uniqueCode.data.length == 0){
				break;
			}
		}
		return code;
	}
}