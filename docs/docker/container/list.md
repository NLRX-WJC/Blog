# 列出容器

要想列出已经当前正在运行的所有容器，可以使用 `docker container ls` 命令。

```bash
$ docker container ls
CONTAINER ID   IMAGE         COMMAND                  CREATED       STATUS       PORTS           NAMES
a842d7cd42cf   docker-tips   "/docker-entrypoint.…"   4 hours ago   Up 4 hours              magical_jackson
```

列表包含了 `容器 ID` 、`镜像名称` 、 `启动后执行的命令` 、`创建时间` 、`状态` 、`端口映射` 以及 `容器名称` 。

其中 **容器 ID** 则是容器的唯一标识。

## 列出全部容器

不加任何参数的情况下， `docker container ls` 只列出当前正在运行所有容器，但是有时候我们希望列出所有容器，包括已经停止运行的容器。此时可以给该条命令添加 `-a` 参数来查看全部容器。

列出全部容器

```bash
$ docker container ls -a
CONTAINER ID   IMAGE            COMMAND                  CREATED       STATUS                  PORTS           NAMES
a842d7cd42cf   docker-tips      "/docker-entrypoint.…"   4 hours ago   Up 4 hours                              magical_jackson
4366d9b61b10   ubuntu           "node --version"         2 days ago    Exited (0) 2 days ag                    hungry_volhard
```

## 以特定格式显示

默认情况下， `docker container ls` 会输出一个完整的表格，但是我们并非所有时候都会需要这些内容。比如，当我们需要批量的删除容器时，我们需要利用 `docker container ls` 把所有的容器 ID 列出来，然后再可以交给 `docker container rm` 命令作为参数来删除指定的这些容器，这个时候就用到了 `-q` 参数。

```bash
$ docker container ls -aq
a842d7cd42cf
4366d9b61b10
```

`--filter` 配合 `-q` 产生出指定范围的 `ID` 列表，然后送给另一个 `docker` 命令作为参数，从而针对这组实体成批的进行某种操作的做法在 `Docker` 命令行使用过程中非常常见，不仅仅是镜像，将来我们会在各个命令中看到这类搭配以完成很强大的功能。因此每次在文档看到过滤器后，可以多注意一下它们的用法。

另外一些时候，我们可能只是对表格的结构不满意，希望自己组织列；或者不希望有标题，这样方便其它程序解析结果等，这就用到了 [Go 的模板语法](https://gohugo.io/templates/introduction/)。

比如，下面的命令会直接列出镜像结果，并且只包含镜像ID和仓库名：

```bash
$ docker container ls -a --format "{{.ID}}: {{.Image}}"
a842d7cd42cf: docker-tips
4366d9b61b10: ubuntu
```

或者打算以表格等距显示，并且有标题行，和默认一样，不过自己定义列：

```bash
$ docker container ls --format "table {{.ID}}\t{{.Image}}\t{{.Names}}"
CONTAINER ID   IMAGE             NAMES
a842d7cd42cf   docker-tips       magical_jackson
4366d9b61b10   ubuntu            hungry_volhard
```
