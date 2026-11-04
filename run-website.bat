@echo off
title The Grand Imperial Palace - Web Server
cd /d "%~dp0"
set "PATH=%~dp0\.tools\node;%PATH%"
echo ========================================================
echo   THE GRAND IMPERIAL PALACE - FUNCTION HALL WEBSITE
echo ========================================================
echo.
echo Starting Vite Development Server...
echo The website will automatically open in your default browser.
echo Press Ctrl+C in this window when you wish to stop the server.
echo.
call npm run dev -- --open
pause

