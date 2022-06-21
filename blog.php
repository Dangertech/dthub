
<html>
	<head>
		<title>dthub</title>
		<link rel="stylesheet" href="../style.css">
		<!Makes the title>
		<script src="../title.php" defer></script>
		<!Moves the synthetik sun>
		<script src="../sun.js" defer></script>
	</head>
	<body>
		<div id="title" logosrc="../sources/dthublogo.png" leads=""></div>
		<! This ONE line reads the blog of the name url query string into the file >
		<?php
			$expect_root = '/var/www/';
			echo file_get_contents( $expect_root .'EXPECT/garden/blogs/' . $_GET['name']);
		?>
		<div id="sun" src="../sources/Synthcity.keyed.png"></div>
	</body>
</html>
