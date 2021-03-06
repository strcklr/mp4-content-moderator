import pathlib

CLASS_NAMES = ["hentai", "porn", "neutral"]
CLASS_NAMES.sort()  # Alphabetical

class DataHolder:
    root = None
    data_dir = None
    # drawings = None
    hentai = None
    porn = None
    # sexy = None
    neutral = None

    train_set = None
    val_set = None

    def __init__(self, path):
        self.root = path
        self.data_dir = pathlib.Path(path)
        print("Total images: %d" % len(list(self.data_dir.glob('*/*.jpg'))))

        # self.drawings = self.gather_images("drawings")
        self.hentai = self.gather_images("hentai")
        self.porn = self.gather_images("porn")
        # self.sexy = self.gather_images("sexy")
        self.neutral = self.gather_images("neutral")

    def gather_images(self, dir_name):
        data = self.data_dir.glob(dir_name + "/*")
        print("%s%s: %d" % ("----- ", dir_name, len(list(data))))
        self.clean_data(self.root + "/" + dir_name)
        return data

    def clean_data(self, dir):
        import os
        print("Verifying data for %s" % dir)
        invalid = 0
        for f in os.listdir(dir):
            filename = os.path.join(dir, f)
            if not self.validate_file(filename):
                invalid += 1
        print("Total invalid: %d/%d" % (invalid, len(os.listdir(dir))))

    def validate_file(self, file):
        import os
        from PIL import Image
        try:
            # print("Verifying file %s", file)
            img = Image.open(file)
            img.verify()
            return True
        except (IOError, SyntaxError) as e:
            print('Bad file: %s, removing...' % file)
            os.remove(file)
            return False
