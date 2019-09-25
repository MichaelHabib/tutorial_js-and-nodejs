<html>
<head>
    <meta charset="UTF-8"/>
    <title>Learning JS and NodeJS</title>

</head>
<body>
<ul>
	<?php
	$files = scandir(__DIR__);
//	var_dump($files);
	foreach ($files as $file) {
		echo "<li><a href=\"$file\">$file</a></li>";
	}
	?>
</ul>
</body>
</html>
