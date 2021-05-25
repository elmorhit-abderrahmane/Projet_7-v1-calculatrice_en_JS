<?php 
require "treatment.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculatrice avec PHP</title>
    <link rel="stylesheet" href="stayle.css">
</head>
<body>
<div class="center">
    <form method="post">
            <div class="output">
                <input type="text"  readonly  id="afficheur" value="<?php echo $display; ?>">
            </div>
            <input type="input" hidden name="x" value="<?php echo $x ?>">
            <input type="input" hidden name="op" value="<?php echo $operator ?>">
           
            <input type="input" hidden name="y" value="<?php echo $y ?>"><br>
            <button name="nb" value="7">7</button>
            <button name="nb" value="8">8</button>
            <button name="nb" value="9">9</button>
            <button name="op" value="/">/</button><br>
            <button name="nb" value="4">4</button>
            <button name="nb" value="5">5</button>
            <button name="nb" value="6">6</button>
            <button name="op" value="*">*</button><br>
            <button name="nb" value="1">1</button>
            <button name="nb" value="2">2</button>
            <button name="nb" value="3">3</button>
            <button name="op" value="-">-</button> <br>
            <button name="op" value=".">.</button>
            <button  name="nb" class="zero" value="0">0</button>
            <button name="op" value="+">+</button>
            <button id="cler" name="C" value="0">C</button> <br>
            <button name="equal" id="equal" >=</button>

        
    </form>
</div>
</body>
</html>