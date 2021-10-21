window.onload = function(){
	
	console.log("Page Loaded, loading plugin");
	const swup = new Swup({
  		plugins: [new SwupPreloadPlugin()]
	});
	console.log("Preloading pages");
	swup.preloadPages();	
}
