window.addEvent("domready", function () {
    new FancySettings.initWithManifest(function (settings) {
        settings.manifest.submit_version.addEvent("action", function () {
			var version_elem = document.getElementById("rdoc_preferred_version");
            localStorage["rdoc_preferred_version"] = version_elem.value.replace(/(^\s+|\s+$)/g, '');
			var container = version_elem.parentNode;
			confirm_setting(container);
			destroy_confirmation(container);	
        });
    });
	    
});

