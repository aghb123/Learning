# !D:\python 3.9.1 python
import os

print("Please input filepath:")
path = input()
file1 = open(path, "r", encoding="UTF-8")
file2 = open(".\catalog.txt", "r", encoding="UTF-8")
content = file1.read()
contentadd = file2.read()
file1.close()
file2.close()
pos = content.find("</head>")
if pos != -1:
    content = content[:pos] + contentadd + content[pos:]
    file1 = open(path, "w", encoding="UTF-8")
    file1.write(content)
    file1.close()
    print("OK")