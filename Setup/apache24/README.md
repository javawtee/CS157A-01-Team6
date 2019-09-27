# Apache setup (Windows)
1. (Required) Download and install [vc_redist_[x86 | x64]](https://www.microsoft.com/en-US/download/details.aspx?id=48145)<br/>
[Preferred installation of both]
2. (Required) Download [Apache Lounge](https://www.apachelounge.com/download/) <br/>
[Preferred *_x64.zip]
3. Unzip downloaded Apache package
4. Copy and paste Apache24 folder to C: drive
5. Run cmd as administration
6. Change directory to C:/Apache24/bin<br/>
Type the following command to finish installation of Apache
```
httpd -k install
```
7. Configure apache config file (httpd.conf), [download](https://github.com/javawtee/CS157A-01-Team6/blob/master/Setup/apache24/httpd.conf) and copy this to C:/Apache24/conf
8. Start/ Restart Apache service (open C:/Apache24/bin/ApacheMonitor.exe; then, click Start/Restart)
# Apache setup (MacOS)
To be updated
