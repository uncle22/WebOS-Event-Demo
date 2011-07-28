enyo.kind({
	name: "Main",
	kind: "enyo.Control",
	className: "main",
	layoutKind: "VFlexLayout",
	components: [
		//MainHeader
		{ name: "MainHeader", kind: "enyo.Header", className: "main-mainheader", content: "Event Tutorial" },
		//DataDisplay
		{
			name: "DataDisplay",
			kind: "enyo.Group",
			className: "main-datadisplay",
			layoutKind: "VFlexLayout",
			caption: "Data Display",
			components: [
				//FirstNameRow
				{
					name: "FirstNameEntryRow",
					kind: "enyo.Control",
					className: "main-datadisplay-entryrow",
					layoutKind: "HFlexLayout",
					components: [
						{ name: "FirstNameLabel", kind: "enyo.Control", className: "main-datadisplay-label", content: "First Name:" },
						{ name: "FirstNameValue", kind: "enyo.Control", className: "main-datadisplay-value", content: "null" }
					]
				},
				//LastNameRow
				{
					name: "FirstNameEntryRow",
					kind: "enyo.Control",
					className: "main-datadisplay-entryrow",
					layoutKind: "HFlexLayout",
					components: [
						{ name: "LastNameLabel", kind: "enyo.Control", className: "main-datadisplay-label", content: "Last Name:" },
						{ name: "LastNameValue", kind: "enyo.Control", className: "main-datadisplay-value", content: "null" }
					]
				},
			]			
		},
		//DisplayEventPopupButton
		{ name: "DisplayEventPopupButton", kind: "enyo.Button", className: "main-displayeventpopupbutton", label: "Display Event Popup", onclick: "displayEventPopupButtonHandler" },
		//EventPopup
		{ name: "EventPopup", kind: "EventPopup" }
	],
	//MEMBER METHODS
	displayEventPopupButtonHandler : function () {
		//display the event popup at the center of the screen
		this.$.EventPopup.openAtCenter();
	},
	//CONSTRUCTORS
	create : function () {
		this.inherited(arguments);
	},
	destroy : function () {
		this.inherited(arguments);
	}
});