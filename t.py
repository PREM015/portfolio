import os

base_path = os.path.join(os.getcwd(), 'src')

folders = [
    "components",
    "pages",
    "layout",
    "context",
    "hooks",
    "utils",
    "data",
    "styles"
]

for folder in folders:
    path = os.path.join(base_path, folder)
    os.makedirs(path, exist_ok=True)
    print(f"✅ Created: {path}")
