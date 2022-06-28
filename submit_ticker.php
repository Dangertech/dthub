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
		<p class="center">
			<br>
			<br>
			<br>
			<br>
			Your submission is:
		</p>
		<p style="text-align: center;">
			<?php
				$prop = $_GET["content"];
				echo $prop;
				
				# Now process the submission and actually put it into the file
				if ($prop != "")
				{
					$file = fopen("/var/www/tickermsgs.txt", "a");
					fwrite($file, $prop ."\n");
					fclose($file);
				}
			?>
		</p>
		<p class="center">
			If the submission isn't empty and doesn't try to exploit any obvious
			loopholes in my crappy and insecure design, it should have been added
			to the message list.
			Reload the page (and wait long enough) to see your message appear
			eventually!
			
			To validate that the ticker message was added, here is a printout
			of all available messages:
			<br>
			<br>
			<?php
				$file = fopen("/var/www/tickermsgs.txt", "r");
				$i = 0;
				while (!feof($file))
				{
					$line = fgets($file);
					if ($line != "")
					{
						$i++;
						echo '<gl>'.$i.'</gl>    '.$line.'<br>';
					}
				}
			?>
		</p>
		<div id="sun" src="../sources/Synthcity.keyed.png"></div>
	</body>
</html>
