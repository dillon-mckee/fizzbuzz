function fizz_buzz(num)
{
    if (num % 15 == 0) {
        console.log("FizzBuzz");
        document.write("FizzBuzz");
        document.write("<br>");
    } else if (num % 5 == 0) {
        console.log("Buzz");
        document.write("Buzz");
        document.write("<br>");
    } else if (num % 3 == 0) {
        console.log("Fizz");
        document.write("Fizz");
        document.write("<br>");
    } else {
        console.log(num);
        document.write(num);
        document.write("<br>");
    }
}

for (var i = 1; i <= 100; i++)
{
    fizz_buzz(i);
}
