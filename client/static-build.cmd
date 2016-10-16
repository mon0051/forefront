@echo off
echo "Compiling TypeScript"
CALL .\node_modules\.bin\ngc -p tsconfig-aot.json
echo "Tree Shacking And Minifying Javascript"
CALL .\node_modules\.bin\rollup -c rollup.js