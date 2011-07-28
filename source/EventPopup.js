enyo.kind({
	name: "EventPopup",
	kind: "enyo.Popup",
	//className: "eventpopup",
	layoutKind: "VFlexLayout",
	scrim: true,
	dismissWithClick: false,
	components: [
		//Title
		{ name: "Title", kind: "enyo.Control", className: "eventpopup-title", content: "Event Popup" },
		//DataGroup
		{
			name: "DataGroup",
			kind: "enyo.Control",
			className: "eventpopup-datagroup",
			layoutKind: "VFlexLayout",
			components: [
				//FirstNameEntryRow
				{
					name: "FirstNameEntryRow",
					kind: "enyo.Control",
					className: "eventpopup-entryrow",
					layoutKind: "VFlexLayout",
					components: [
						{ name: "FirstNameEntryLabel", kind: "enyo.Control", className: "eventpopup-entrylabel", content: "First Name:" },
						{ name: "FirstNameEntryInput", kind: "enyo.Input", className: "eventpopup-entryinput", caption: "enter a first name...", value: "" }
					]
				},
				//LastNameEntryRow
				{
					name: "LastNameEntryRow",
					kind: "enyo.Control",
					className: "eventpopup-entryrow",
					layoutKind: "VFlexLayout",
					components: [
						{ name: "LastNameEntryLabel", kind: "enyo.Control", className: "eventpopup-entrylabel", content: "Last Name:" },
						{ name: "LastNameEntryInput", kind: "enyo.Input", className: "eventpopup-entryinput", caption: "enter a last name...", value: "" }
					]
				},
			]
		},
		//ButtonRow
		{
			name: "ButtonRow", 
			kind: "enyo.Control",
			className: "eventpopup-buttonrow",
			layoutKind: "HFlexLayout",
			components: [
				{ name: "OkButton", kind: "enyo.Button", className: "eventpopup-buttonrow-okbutton", label: "Ok", onclick: "okButtonHandler" },
				{ name: "CancelButton", kind: "enyo.Button", className: "eventpopup-buttonrow-cancelbutton", label: "Cancel", onclick: "cancelButtonHandler" }
			]
		}
	],
	//MEMBER METHODS
	okButtonHandler : function () {		
		//get first name value
		var firstName = this.$.FirstNameEntryInput.getValue();
		enyo.log("[okButtonHandler] firstName = " + firstName);
		
		//get last name value
		var lastName = this.$.LastNameEntryInput.getValue();
		enyo.log("[okButtonHandler] lastName = " + lastName);
		
		//reset first name input field value
		this.$.FirstNameEntryInput.setValue("");
		
		//reset last name input field value
		this.$.LastNameEntryInput.setValue("");
		
		//close the popup
		this.close();
	},
	cancelButtonHandler : function () {
		//reset first name input field value
		this.$.FirstNameEntryInput.setValue("");
		
		//reset last name input field value
		this.$.LastNameEntryInput.setValue("");
		
		//close the popup
		this.close();
	},
	//CONSTRUCTORS
	create : function () {
		this.inherited(arguments);
	},
	destroy : function () {
		this.inherited(arguments);
	}
});