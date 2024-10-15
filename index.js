import figlet from "figlet"
import chalk from "chalk";


figlet('Hello Wilders!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
}
console.log(chalk.bgRed(data));
}
);


console.log(chalk.bgRed("Victor"));
console.log(chalk.bold.green("Damien"));
console.log(chalk.bgYellow("Gabi"));
console.log(chalk.dim.cyan("Christine"));