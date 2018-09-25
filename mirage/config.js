export default function() {
	this.namespace = '/api';
	let references = [
	{
		type: 'reference',
		id: '1',
		attributes: {
			year: '2015',
			filename: '__RaspberryPiCookbook-OReillyMedia-2016-SimonMonk.pdf',
			filesize: 10,//MB
			title: "Raspberry Pi Cookbook",
			author: "Simon Monk",
			subject: "Raspberry Pi",
			category: "Computer Science",
			subcategory1: "",
			subcategory2: "Raspberry",
			subcategory3: "",
			image: 'assets/images/RPCookbookMonk.png',
			link: 'assets/pdf/RPCookbookMonk.pdf'
		} 
	}, 
	{
		type: 'reference',
		id: '2',
		attributes: {
			year: '1989',
			filename: "I. J. R. Aitchison, A. J. G. Hey Gauge Theories in Particle Physics, Second Edition (Graduate Student Series in Physics)  1989.pdf",
			filesize: '117', //MB
			title: "Gauge Theories in Particle Physics",
			author: "I.J.R. Aitchison",
			subject: "QFT",
			category: "Physics",
			subcategory1: "Theoretical Physics",
			subcategory2: "",
			subcategory3: "",
			image: 'assets/images/GaugeTheoriesAitchison.png',
			link: 'assets/pdf/GaugeTheoriesAitchison.pdf'
		} 
	}, 
	{
		type: 'reference',
		id: '3',
		attributes: {
			year: '2008',
			filename: "StructuralBioinformaticsAnAlgorithmicApproach-2008-ChapmanHall-BurkowskiForbesJ.pdf",
			filesize: '8',//MB
			title: "noname",
			author: "",
			subject: "",
			category: "Bioinformatics",
			subcategory1: "",
			subcategory2: "",
			subcategory3: "Intro",
			image: 'assets/images/StrucBioinformaticsBukorswki.png',
			link: 'assets/pdf/StrucBioinformaticsBukorswki.pdf'
		} 
	}, 
	{
		type: 'reference',
		id: '4',
		attributes: {
			year: '2001',
			filename: "AT.pdf",
			filesize: '12.8',//MB
			title: "Algebraic Topology",
			author: "Allen Hatcher",
			subject: "Introduction to Algebraic Topology",
			category: "Mathematics",
			subcategory1: "Topology",
			subcategory2: "Algebraic Topology",
			subcategory3: "Intro",
			image: 'assets/images/StrucBioinformaticsBukorswki.png',
			link: 'assets/pdf/StrucBioinformaticsBukorswki.pdf'
			//image: 'assets/images/AlgebraicTopologyHatcher.png',
			//link: 'assets/pdf/AlgebraicTopologyHatcher.pdf'
		} 
	} 
	] 
	this.get('/references', function(bb,request){
		if( request.queryParams.category !== undefined ){
			let filteredReferences = references.filter( function(i){
				return i.attributes.category.toLowerCase().
				indexOf(request.queryParams.category.toLowerCase()) !== -1;
			});
			return { data: filteredReferences};
		} else { 
			return { data: references};
		} 
	});
}
