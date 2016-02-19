image-info
==========

## Supported formats

* BMP
* GIF
* JPEG
* PNG
* PSD
* TIFF
* WebP
* SVG

## Usage

```powershell
npm install image-info --save
```

## Example

```javascript
const imageInfo = require('image-info');

imageInfo('./test/images/jpg.jpg', (err, info) => {
    if (err) return console.warn(err);
    console.log(info);
});
```

Callback will return `err`, `info`, and `info` would be return like:

```json
{
  sha1: 'b9ccbb8e5c818bb517352222fd69c8c43e9755b5',
  bytes: 36357,
  ext: 'jpg',
  mime: 'image/jpeg',
  height: 420,
  width: 560,
  type: 'jpg'
}
```

### Animated WebP

```json
{
  "sha1": "5432293fb2f048be5121683ff721a081bf6e13b1",
  "bytes": 663854,
  "ext": "webp",
  "mime": "image/webp",
  "width": 480,
  "height": 480,
  "webp": {
    "featuresPresent": "animation",
    "bgColor": "0xFFFFFFFF",
    "loopCount": 0,
    "frames": [
      {
        "No": 1,
        "width": 480,
        "height": 480,
        "alpha": "no",
        "x_offset": 0,
        "y_offset": 0,
        "duration": 150,
        "dispose": "none",
        "blend": "yes",
        "image_size": 168478
      },
      {
        "No": 2,
        "width": 480,
        "height": 480,
        "alpha": "no",
        "x_offset": 0,
        "y_offset": 0,
        "duration": 150,
        "dispose": "none",
        "blend": "yes",
        "image_size": 170004
      },
      {
        "No": 3,
        "width": 480,
        "height": 480,
        "alpha": "no",
        "x_offset": 0,
        "y_offset": 0,
        "duration": 150,
        "dispose": "none",
        "blend": "yes",
        "image_size": 155276
      },
      {
        "No": 4,
        "width": 480,
        "height": 480,
        "alpha": "no",
        "x_offset": 0,
        "y_offset": 0,
        "duration": 150,
        "dispose": "none",
        "blend": "yes",
        "image_size": 170004
      }
    ],
    "duration": 150
  }
}
```