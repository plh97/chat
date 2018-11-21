#!/usr/bin/env python3

from json import loads, dumps

HOST = '0.0.0.0'
PORT = 80

MAX_SIZE = 1024 * 1000


def parse(bydata):
    data = bydata.decode('utf8').replace("'", '"')
    return loads(data)


def bytestr(data):
    return bytes(dumps(data) + '\n', 'utf-8')


def make_sender(sock):
    return lambda data: sock.sendall(bytestr(data))


def on_message(data, client_ip, response):
    print('Get new state from {}'.format(client_ip))
    print(data)
    response({
        'tasks': [
            {
                'id': 1,
                'action': 'clean_disk'
            }
        ]
    })


class TCPHandler(socketserver.BaseRequestHandler):
    def handle(self):
        data = self.request.recv(MAX_SIZE).strip()
        client_ip = self.client_address[0]
        send = make_sender(self.request)
        j = parse(data)
        on_message(j, client_ip, send)


def start_server():
    server = socketserver.TCPServer((HOST, PORT), TCPHandler)
    print('Socket is ready at ws://{}:{}'.format(HOST, PORT))
    server.serve_forever()
    return server


if __name__ == '__main__':
    start_server()
    