#!/usr/bin/env python3

import socket

from json import loads, dumps
from datetime import datetime


HOST = '0.0.0.0'
PORT = 7854

BUF_SIZE = 1024 * 30  # ~30 KB
SOC_TIMEOUT = 20.0


def normalize(frame):
    return b64encode(frame).decode()


def send(sock):
    return lambda data: sock.sendall(
        bytes(dumps(data) + '\n', 'utf-8')
    )


def deliver(message, host=HOST, port=PORT):
    client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    print('Conversation started... - {}'.format(datetime.now()))
    client.settimeout(SOC_TIMEOUT)
    client.setsockopt(socket.SOL_SOCKET, socket.SO_KEEPALIVE, 1)
    client.connect((host, port))
    try:
        send(client)(message)
        received = str(client.recv(BUF_SIZE).strip(), 'utf-8')
        data = loads(received)
        print('Data received:')
        print(data)
    except BaseException as e:
        print(e)
        pass
    finally:
        client.close()
        print('Conversation ended - {}'.format(datetime.now()))


if __name__ == '__main__':
    deliver({
        'status': 'working',
        'disk_usage': '80%'
    })