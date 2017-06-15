#!/bin/bash
# Creates new 'day**' directory for class

rootDirectory="/home/alex/Atom/geekwise-js1"
declare -a 'day=({01..12})'
classDay=($( for i in ${day[@]}; do echo "day$i"; done; ))
dayFile=($( for i in ${classDay[@]}; do echo $rootDirectory"/$i"; done; ))

function current-day {
    # Removes old days from array
    for i in ${dayFile[@]}; do
        if [[ -d $i ]]; then
            dayFile=(${dayFile[@]/$i})
        fi
    done
    # function variables
    currentDay="${dayFile[0]}"
    css=$currentDay"/css"
    js=$currentDay"/js"
    # Create new day directory
    mkdir -p $css $js
    cd $currentDay
    touch css/styles.css css/challenge.css js/script.js js/challenge.js
}
current-day

dayLabel="${currentDay//"/home/alex/Atom/geekwise-js1/"}"

cd $currentDay
cat > index.html << EOF
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/styles.css">
  <title>$dayLabel</title>
</head>
<body>
    <a href="challenge.html">challenge!</a>

    <script type="text/javascript" src="js/script.js"></script>
</body>
</html>
EOF

cat > challenge.html << EOF
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/challenge.css">
  <title>$dayLabel</title>
</head>
<body>

    <script type="text/javascript" src="js/challenge.js"></script>
</body>
</html>
EOF
