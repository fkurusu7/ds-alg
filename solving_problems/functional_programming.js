// **************************************
// *************** REDUCE ***************
// **************************************

// ADVANCED
// ADVANCED
import { readFileSync } from "node:fs";

const filename =
  "/Users/kurusu/development/study/ds-alg/solving_problems/funcpr_reduce_adv_data.txt";

// try {
//   const fileData = readFileSync(filename, "utf-8")
//     .trim()
//     .split("\n")
//     .map((line) => line.split("  "))
//     .reduce((customers, line) => {
//       console.log(customers, " - ", line);
//       customers[line[0]] = customers[line[0]] || [];
//       customers[line[0]].push({
//         name: line[1],
//         price: line[2],
//         quantity: line[3],
//       });
//       return customers;
//     }, {});
//   console.log(fileData);
// } catch (error) {
//   console.error("Error reading file:", error.message);
// }

try {
  const txtToJson = readFileSync(filename, "utf-8")
    .trim()
    .split("\n")
    .map((line) => line.split("  "))
    .reduce((customers, line) => {
      console.log(line);
      customers[line[0]] = customers[line[0]] || [];
      customers[line[0]].push({
        name: line[1],
        price: line[2],
        quantity: line[3],
        total: line[2] * line[3],
      });
      return customers;
    }, {});
  console.log(txtToJson);
} catch (error) {
  console.error("Error reading file", error);
}
