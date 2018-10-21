import axios from 'axios';

let API_DATA = 'https://www.themealdb.com/api/json/v1/1/latest.php';
let API_DATA_RECIPE = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

let ServiceGet = (url,data,callback) =>{
	axios.get(url,{ params: data })
	.then(function (response) {
		if(typeof callback === 'function') {
			callback(response.data)
		}else{
			console.log(response)
		}
	})
	.catch(function (error) {
		console.log(error);
	});
}

let ServicePost = (url,data,callback) =>{
	axios.post(url,data)
	.then(function (response) {
		if(typeof callback === 'function') {
			callback(response.data)
		}else{
			console.log(response)
		}
	})
	.catch(function (error) {
		console.log(error);
	});
}
export{
 	ServiceGet,
 	ServicePost,
 	API_DATA,
 	API_DATA_RECIPE
}

