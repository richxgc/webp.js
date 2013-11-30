webp.js
======

<h3>Implement now webp images on your site</h3>
<p>The library load a webp image if the browser is supported, else load a jpg, png or whatever format you want in img tag</p>

<h4>How can i serve different images for different browsers?</h4>
<p>In order to load the correct image you need to upload the same image with the same name and different extension of course, .webp and .jpg|.png|.gif</p>

<h4>How can i convert a png, jpg image to WebP format?</h4>
<p>Well you can go to Google Developers Site and search for "WebP" (https://developers.google.com/speed/webp/). The page shows you how convert image from or to WebP format.</p>

<h4>How implement the webp.js library?</h4>
<p>It's very easy to configure webp.js library, just need load the ".min" file in the head section of your html. Example:</p>
```HTML
<html>
<head>
	<script type="text/javascript" src="../lib/webp.min.js"></script>
</head>
</html>
```
<h4>And now, how load the image files?</h4>
<p>For achieve the goal of load the correct image and execute one only request to server, we need use the data-* property for img tag, in this case we use data-src & data-format. In the data-src attribute you can specify the filename and path for that file (without extension). On other hand in the data-format attribute you may specify the format (extension) which is loaded in which case of the web browser not supported WebP. Example:</p>
```HTML
<body>
	<img data-src="./test" data-format="png" alt="WebP Image"/>
</body>
```