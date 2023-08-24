#!/usr/bin/node

/*
    Print a squaress with the character #
    
    The size of the squaress must be the first arguments
    of the program.
*/


if (process.argv.length <= 2) {
    process.stderr.write("Missing argument\n");
    process.stderr.write("Usage: ./1-print_square.js <size>\n");
    process.stderr.write("Example: ./1-print_square.js 8\n");
    process.exit(1)
}

size = parseInt(process.argv[2], 10)

for (let n = 0 ; n < size ; n ++) {
    for (let w = 0 ; w < size ; w ++) {
        process.stdout.write("#");
    }
    process.stdout.write("\n");
}
