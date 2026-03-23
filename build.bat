@echo off
xcopy .\assets .\final\assets\ /s /e /y
copy .\CNAME .\final\CNAME /y

echo preprocessor

for %%I in (*.html) do if not "%%I" == "basic.html" cpp %%I -I. -P  -finput-charset=UTF-8 -fexec-charset=UTF-8 -o .\final\%%I --no-warnings

pushd songs
for %%I in (*.html) do if not "%%I" == "basic.html" cpp %%I -I.. -P  -finput-charset=UTF-8 -fexec-charset=UTF-8 -o ..\final\songs\%%I --no-warnings
popd

pushd pages
for %%I in (*.html) do if not "%%I" == "basic.html" cpp %%I -I.. -P  -finput-charset=UTF-8 -fexec-charset=UTF-8 -o ..\final\pages\%%I --no-warnings
popd

echo convert utf-8

pushd final
py ..\conv_utf8.py
echo done!
python -m http.server 8000
popd 

