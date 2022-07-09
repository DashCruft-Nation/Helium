/* eslint-disable no-unused-vars */
/* let mainWindow;
const { autoUpdater } = require('electron-updater');

// Configuration
autoUpdater.autoInstallOnAppQuit = false;
autoUpdater.autoDownload = false;
//autoUpdater.checkForUpdatesAndNotify();
//setInterval(() => {
//	// Check for updates regardless of the setting but do not notify or update if disallowed
//	autoUpdater.checkForUpdates().catch(() => '');
//}, 60 * 60 * 1000);

autoUpdater.on('error', (...args) => {
	console.log(args[0]);
});

autoUpdater.on('update-available', () => {
	autoUpdater.downloadUpdate();
});

autoUpdater.on('update-downloaded', (info) => {
	const isPreRelease = !!autoUpdater.currentVersion.version.split('.')[2].split('-')[1];
	const minorVersion = autoUpdater.currentVersion.version.split('.')[1];
	const majorVersion = autoUpdater.currentVersion.version.split('.')[0];
	const patchVersion = autoUpdater.currentVersion.version.split('.')[2].split('-')[0];

	// Auto-install patches regardless of setting
	if (parseInt(info.version.split('.')[2].split('-')[0]) > parseInt(patchVersion)) {
		return mainWindow.webContents.send('handle-update-available', info);
	}

	if (getAutoUpdateSetting()) {
		const notif = new Notification({
			'body': `An update is available!\nCurrent Version: ${autoUpdater.currentVersion}\nUpdate Version: ${info.version}`,
			'icon': __dirname.split('\\').slice(0, -2).join('/') + '/icon.ico',
			'title': 'Lazap Update Available!',
			'silent': false,
		});
		notif.show();
		notif.on('click', () => autoUpdater.quitAndInstall(false, true));
		mainWindow.webContents.send('handle-update-available', info);
	}
});

const { ipcMain, Notification } = require('electron');

ipcMain.on('handle-update-install', () => {
	autoUpdater.quitAndInstall(false, true);
});

const getAutoUpdateSetting = () => {
	const fs = require('fs');
	const data = JSON.parse(fs.readFileSync('./storage/Settings/LauncherData.json').toString());
	return data.checkForUpdates;
}

module.exports = (win) => mainWindow = win;
*/