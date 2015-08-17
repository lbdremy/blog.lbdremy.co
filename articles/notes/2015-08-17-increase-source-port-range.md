# Increase source port range

By default, on a Linux distro, you have around 28K source ports available for a single destination (IP:port)

```sh
$ sysctl net.ipv4.ip_local_port_range
net.ipv4.ip_local_port_range = 32768    61000
```

In order to get 64K source ports, just run:

```
$ sudo sysctl net.ipv4.ip_local_port_range="1025 65000"
```

And don’t forget to update your /etc/sysctl.conf file!

References:

- [HAPROXY, HIGH MYSQL REQUEST RATE AND TCP SOURCE PORT EXHAUSTION](http://blog.haproxy.com/2012/12/12/haproxy-high-mysql-request-rate-and-tcp-source-port-exhaustion/)