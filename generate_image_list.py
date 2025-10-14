import os

img_dir = 'img'
js_file = 'js/image-list.js'

images = [f for f in os.listdir(img_dir) if os.path.isfile(os.path.join(img_dir, f))]

with open(js_file, 'w') as f:
    f.write('const imageList = [\n')
    for image in images:
        f.write(f'    \'{image}\',\n')
    f.write('];\n')

print(f'Successfully generated {js_file} with {len(images)} images.')
