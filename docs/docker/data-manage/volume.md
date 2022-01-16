# 数据卷

`数据卷` 是一个可供一个或多个容器使用的特殊目录：

- `数据卷` 可以在容器之间共享和重用；
- 对 `数据卷` 的修改会立即生效；
- 对 `数据卷` 的更新，不会影响镜像；
- `数据卷` 默认会一直存在，即使容器被删除；

在命令行中可以使用 `docker volume --help` 来查看数据卷相关的命令，如下：

```bash
docker volume --help

Usage:  docker volume COMMAND

Manage volumes

Commands:
  create      Create a volume  # 创建一个数据卷
  inspect     Display detailed information on one or more volumes  # 显示数据卷详情
  ls          List volumes  # 列出所有的数据卷
  prune       Remove all unused local volumes  # 删除所有的未正在使用的数据卷
  rm          Remove one or more volumes  # 删除一个或多个数据卷
```

下面我们就来实操一下这些命令。

## 命令实操

**创建一个数据卷：**

```bash
~ docker volume create nlrx
```

**查看所有数据卷：**

```bash
~ docker volume ls

# 输出
DRIVER    VOLUME NAME
local     nlrx
```

**查看指定数据卷的信息：**

```bash
 ~ docker volume inspect nlrx
[
    {
        "CreatedAt": "2022-01-16T15:24:43Z",
        "Driver": "local",
        "Labels": {},
        "Mountpoint": "/var/lib/docker/volumes/nlrx/_data",
        "Name": "nlrx",
        "Options": {},
        "Scope": "local"
    }
]
```

其中， `Mountpoint` 就是该数据卷在本机中的物理位置。

**删除数据卷：**

```bash
docker volume rm nlrx
```

如果被删除的数据卷正在被某个运行中的容器所使用时，那么此时 `docker` 会提示当前数据卷正在被使用，不能删除。如下：

```bash
 ~ docker volume rm nlrx
Error response from daemon: remove nlrx: volume is in use - [3ecf36332a8cb63b12af5b4ee13491338839b2f27311cdcc1e6c5d5499dd2e26]
```

需要先将正在使用这个数据卷的容器停止后，才能删除。

**删除无主数据卷：**

当一个数据卷没有被任何容器使用时，此时该数据卷就变成了「无主数据卷」，如果想要快速删除所有的无主数据卷时，可以使用 `prune` 命令，如下：

```bash
docker volume prune
```

## 将数据卷挂载到容器里

在使用 `docker run` 命令启动容器的时候，可以使用 `--mount` 来将数据卷挂载到容器里。在一次 `docker run` 中可以挂载多个数据卷。

创建一个名为 `web` 的容器，并加载一个数据卷到容器的 `/usr/share/nginx/html` 目录。如下：

```bash
docker run --name web -p 8081:80 --mount source=nlrx,target=/usr/share/nginx/html -d nginx:alpine
```

此时，打开浏览器访问 `127.0.0.1:8081` ，如果出现了 `nginx` 的欢迎页面，则表示容器启动成功。

此时，我们还可以查看一下改容器的具体信息，如下：

```bash
 ~ docker inspect web

# 数据卷信息在 "Mounts" 下面
"Mounts": [
  {
    "Type": "volume",
    "Source": "nlrx",
    "Target": "/usr/share/nginx/html"
  }
],
```

接着，我们可以进到容器卷里面，如下：

```bash
cd /var/lib/docker/volumes/nlrx/_data
```

并尝试修改容器卷里的 `index.html` 文件内容，保存并刷新浏览器就可以看到数据卷内容的变更已经应用到容器里了。



## 在Mac OS中，卷默认挂载路径不存在问题

在 `Mac OS` 中，使用 `docker volume create nlrx` 创建完数据卷后，此时访问数据卷的挂载路径 `/var/lib/docker/volumes/nlrx/_data` 时，会提示该路径不存在，解决方法如下：

```bash
docker run -it --privileged --pid=host justincormack/nsenter1

Unable to find image 'justincormack/nsenter1:latest' locally
latest: Pulling from justincormack/nsenter1
5bc638ae6f98: Pull complete 
Digest: sha256:e876f694a4cb6ff9e6861197ea3680fe2e3c5ab773a1e37ca1f13171f7f5798e
Status: Downloaded newer image for justincormack/nsenter1:latest

# 在这里可查看挂载路径
/ cd /var/lib/docker/volumes/nlrx/_data
```













