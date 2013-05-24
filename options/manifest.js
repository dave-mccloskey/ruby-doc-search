// SAMPLE
this.manifest = {
    "name": "RubyDoc Search",
    "icon": "../rubydoc-48.png",
    "settings": [
        {
            "tab": "Preferred Ruby Version",
            "group": "Set preferred version",
			"name": "rdoc_preferred_version",
			"id": "rdoc_preferred_version",
            "type": "text",
            "label": "Ruby Version",
            "text": "The full version number e.g 2.0, 1.9.3..."
        },
		{
            "tab": "Preferred Ruby Version",
            "group": "Set preferred version",
            "name": "submit_version",
            "type": "button",
            "label": "",
            "text": "Save"
        },
		
		{
			"tab": "Preferred Ruby Version",
			"group": "Note",
			"name": "note",
			"type": "description",
			"text": "Setting this preference does not limit results to only that Ruby version, but is pretty good at prioritizing them.<br><br>It actually works by prepending the contents of the box onto the search, so you may be able to find inventive uses for it."
		}
		]
	};
      