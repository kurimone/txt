import re
import os

directory = '../docs/3.md'

pattern = r'!\[\]\((assets/images/.*?\.(jpg|jpeg|png|gif))\)\{ width="400" loading=lazy \}'

template = '<div class="single-image"><img src="../\\1"></div>'

for filename in os.listdir(directory):
    if filename.endswith(".md"):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as file:
            content = file.read()
        
        new_content = re.sub(pattern, template, content)
        
        with open(filepath, 'w', encoding='utf-8') as file:
            file.write(new_content)
        
        print(f'Processed {filename}')
