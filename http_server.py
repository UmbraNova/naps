import http.server
import socketserver
import os
import socket

PORT = 8000
class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()
os.chdir('D:\MAIN\\naps-project')  # Replace Directory Path
handler_object = MyHttpRequestHandler
with socketserver.TCPServer(("", PORT), handler_object) as httpd:
    print(f"Serving at port {PORT}")
    print("Server is running. Press Ctrl+C to stop the server.")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    print("Server stopped.")
    httpd.server_close()
    print("Server closed.")


hostname = socket.gethostname()
ip_address = socket.gethostbyname(hostname)
print(f"Hostname: {hostname}")
print(f"IP Address: {ip_address}")


# navigate to location
# python http_server.py
# in browser > xx.xx.xx.xx:port