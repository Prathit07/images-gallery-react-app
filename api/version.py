import pathlib

ROOT = pathlib.Path(__file__).resolve().parents[0]

with open (ROOT / "VERSION") as version_file:
    __version__ = version_file.read()
    print(f"Images Gallery App Version: {__version__}")
