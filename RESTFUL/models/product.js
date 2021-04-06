const Firestore = require("@google-cloud/firestore");
const db = new Firestore();

exports.getCount = async function getProductCount() {
	const query = db.collection("products").doc("productsCount");
	const querySnapshop = await query.get();
	if (querySnapshop.size > 0){
		
		return querySnapshop.docs[0].data();
	}
	else {
		return {status: "Not found!"};
	}
	// query.get().then((doc) => {
	// 	if (doc.exist){
	// 		return doc;
	// 	}
	// 	else {
	// 		return {};
	// 	}
	// }).catch(error => {
	// 	return {};
	// })
}


exports.getProducts = async function(){
    
}