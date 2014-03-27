// SAMPLE
this.manifest = {
    "name": "RubyDoc Search",
    "icon": "../rubydoc-48.png",
    "settings": [
        {   "tab": "Preferred Ruby Version",
            "group": "Set preferred version",
            "name": "intro",
            "type": "description",
            "text": "RubyDoc Search works best when given a preferred version number, set it here."
        },
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
            "text": "The version number given above is simply prepended to the query input before being dispatched to the search engine; this works well but is imperfect and you may see results pertaining to Ruby versions other than that chosen."
		}
		]
	};
      
