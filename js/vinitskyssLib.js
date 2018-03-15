let getFullElementClass = function(list){
	let classNeme = "";
	for(let i = 0; i < list.length; i++){
		classNeme = classNeme + '.' + list[i];
	}
	return classNeme;
}