import os
import re

for root, dirs, files in os.walk('.'):
  for directory in dirs + ['.']:
    for fi in os.scandir(directory):
      if fi.is_file() and fi.name.endswith(".html"):
        # print(directory + '\\' + fi.name)
        fn = directory + '/' + fi.name
        with open(fn, "r") as f:
          try:
            file_string = f.read()
            file_string = re.sub("\\\\U([0-9a-fA-F]+)", "&#x\\1;", file_string).replace("<br/> ", "<br/>").replace("\\t", "  ").replace("\\T", "\t").replace("\\/", "/")
          except:
            print(f"error file {fn}")
        with open(fn, "w") as f:
          f.write(file_string)
