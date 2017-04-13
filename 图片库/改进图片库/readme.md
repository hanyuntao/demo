# 1.检查是否支持平稳退化

即使用户禁用javascript功能，仍然可以浏览图片，而不是无法访问。

# 2.javascript与HTML分离

问题：`onclick`事件直接插入了标记文档里。

```
<li>
	<a href="../images/dog.jpg" title="A dog with glasses" onclick="showPic(this);return false;">dog</a>
</li>
```

理想情况下应该在外部文件内完成`onclick`事件处理函数。

# 3.添加缩略图