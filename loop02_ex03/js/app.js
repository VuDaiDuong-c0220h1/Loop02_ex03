let a = "X";
let b = "&nbsp;&nbsp;&nbsp;";
for (count = 1; count <= 5; count++) {
    document.write(a.repeat(count) + "<br/>");
}

for (count = 5; count > 0; count--) {
    document.write(a.repeat(count) + "<br/>");
}

for (count = 1; count <= 5; count++) {
    document.write(b.repeat(5 - count) + a.repeat(count) + "<br/>");
}

for (count = 0; count <= 5; count++) {
    document.write(b.repeat(count) + a.repeat(5 - count) + "<br/>");
}