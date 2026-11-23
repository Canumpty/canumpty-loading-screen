-- © 2026 Canumpty Digital Studios. All rights reserved except as expressly granted under this licence.
AddEventHandler('playerSpawned', function()
    ShutdownLoadingScreenNui()
    ShutdownLoadingScreen()
end)
-- Other resources may update the visual progress indicator:
-- SendNUIMessage({ action = 'progress', value = 65, label = 'Loading properties...' })
