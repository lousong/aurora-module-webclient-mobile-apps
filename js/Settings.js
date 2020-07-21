'use strict';

var
	_ = require('underscore'),
	
	Types = require('%PathToCoreWebclientModule%/js/utils/Types.js')
;

module.exports = {
	ServerModuleName: 'MobileApps',
	HashModuleName: 'mobile-apps',
	
	ShowFilesAndroidApp: true,
	FilesAndroidAppLink: '',
	
	ShowFilesIosApp: true,
	FilesIosAppLink: '',
	
	ShowFilesWinApp: true,
	FilesWinAppLink: '',
	
	ShowMailAndroidApp: true,
	MailAndroidAppLink: '',
	
	ShowMailIosApp: true,
	MailIosAppLink: '',
	
	/**
	 * Initializes settings from AppData object sections.
	 * 
	 * @param {Object} oAppData Object contained modules settings.
	 */
	init: function (oAppData)
	{
		var oAppDataSection = oAppData['%ModuleName%'];
		
		if (!_.isEmpty(oAppDataSection))
		{
		
			this.ShowFilesAndroidApp = Types.pString(oAppDataSection.ShowFilesAndroidApp, this.ShowFilesAndroidApp);
			this.FilesAndroidAppLink = Types.pString(oAppDataSection.FilesAndroidAppLink, this.FilesAndroidAppLink);
	
			this.ShowFilesIosApp = Types.pString(oAppDataSection.ShowFilesIosApp, this.ShowFilesIosApp);
			this.FilesIosAppLink = Types.pString(oAppDataSection.FilesIosAppLink, this.FilesIosAppLink);
	
			this.ShowFilesWinApp = Types.pString(oAppDataSection.ShowFilesWinApp, this.ShowFilesWinApp);
			this.FilesWinAppLink = Types.pString(oAppDataSection.FilesWinAppLink, this.FilesWinAppLink);
			
			this.ShowMailAndroidApp = Types.pString(oAppDataSection.ShowMailAndroidApp, this.ShowMailAndroidApp);
			this.MailAndroidAppLink = Types.pString(oAppDataSection.MailAndroidAppLink, this.MailAndroidAppLink);
			
			this.ShowMailIosApp = Types.pString(oAppDataSection.ShowMailIosApp, this.ShowMailIosApp);
			this.MailIosAppLink = Types.pString(oAppDataSection.MailIosAppLink, this.MailIosAppLink);
			
		}
	}
};