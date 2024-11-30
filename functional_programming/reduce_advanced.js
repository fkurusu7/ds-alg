import fs from "fs";

const output = fs
  .readFileSync("reduce_advanced_data.txt", "utf-8")
  .trim()
  .split("\n")
  .map((line) => line.split("  "))
  .reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || [];
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      qty: line[3],
    });
    return customers;
  }, {});

console.log(JSON.stringify(output, null, 2));
