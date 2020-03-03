import re

regex = re.compile(r"^(?=.*[0-9])[a-zA-Z0-9]{8,1000}$")
if regex.findall("HelloItsMe8"):
    print("YES")
else:
    print("NO")
