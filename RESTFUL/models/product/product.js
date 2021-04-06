const Firestore = require("@google-cloud/firestore");
const db = new Firestore();

exports.getCount = async function getProductCount() {
	const query = db.collection("productsCount");
	const querySnapshot = await query.get();

	return querySnapshot;
}

exports.getProducts = async function(){
    
}