// ================
// let value = document.getElementById("val");
// value.textContent = 0;
// ================
const divide = document.getElementById("key-divide");
const multiply = document.getElementById("key-multiplication");
const root = document.getElementById("key-root");
const square = document.getElementById("key-square");

const minus = document.getElementById("key-subtract");
const plus = document.getElementById("key-add");

const modulo = document.getElementById("key-modulo");
const equal = document.getElementById("key-equal");
const dot = document.getElementById("key-dot");

// ================
const zero = document.getElementById("key-zero");
const one = document.getElementById("key-one");
const two = document.getElementById("key-two");
const three = document.getElementById("key-three");
const four = document.getElementById("key-four");
const five = document.getElementById("key-five");
const six = document.getElementById("key-six");
const seven = document.getElementById("key-seven");
const eight = document.getElementById("key-eight");
const nine = document.getElementById("key-nine");
// ================

const updateVal = (v) => {
  value.textContent = v;
};

// ===================================================================================
let value = document.getElementById("val");
value.textContent = 0;

const keypadContainer = document.querySelector(".keypad-container");

// Add event listener to the container
keypadContainer.addEventListener("click", function (event) {
  // check if clicked element has the 'key' class attached to it.
  if (event.target.classList.contains("key")) {
    const keyValue = event.target.textContent.trim();

    console.log(keyValue);
    // if '=' is clicked, it means time to calculate, but before that check if valid
    if (keyValue === "=") {
      // '=' is pressed so capture the string
      const strCombo = value.textContent.trim();
      let result;

      // pull the operator
      const operator = strCombo.includes("+")
        ? "+"
        : strCombo.includes("-")
        ? "-"
        : strCombo.includes("*")
        ? "*"
        : strCombo.includes("/")
        ? "/"
        : null;

      // check if operator is valid and not null
      if (operator) {
        // split the string into two parts and store it in an array, split from operator
        const values = strCombo.split(operator);
        const num1 = Number(values[0]);
        const num2 = Number(values[1]);

        // use switch statement for evaluation
        switch (operator) {
          case "+":
            result = num1 + num2;
            break;
          case "-":
            result = num1 - num2;
            break;
          case "*":
            result = num1 * num2;
            break;
          case "/":
            result = num2 === "0" ? "Error: Division by Zero" : num1 / num2;
            break;
          default:
            result = "Error"; // Fallback for unhandled operators
        } // switch case end
      } else {
        // if operator is not valid then
        result = "Error";
      }

      // update the screen with the result
      value.textContent = result;
    } else if (keyValue === "C") {
      // clear the screen if 'C' is pressed
      value.textContent = "";
    } else {
      // handle input : check if there a leading 0
      if (value.textContent === "0" && keyValue !== "0") {
        value.textContent = keyValue;
      } else {
        // check if the first value or we need to append it to the value of the value
        value.textContent += keyValue;
      }
    }
  }
});

// ===================================================================================
// // Get the reference to the screen where the calculation will appear
// const value = document.getElementById("val");

// // Get the reference to the keypad container
// const keypadContainer = document.querySelector(".keypad-container");

// // Add event listener for clicks on the keypad container
// keypadContainer.addEventListener("click", function (event) {
//   // Check if the clicked element has the "key" class
//   if (event.target.classList.contains("key")) {
//     const keyValue = event.target.textContent.trim(); // Get the value of the clicked key

//     // If it's the "=" key, handle the expression evaluation
//     if (keyValue === "=") {
//       const strCombo = value.textContent.trim(); // Get the current text content on the screen
//       let result;

//       // Evaluate the expression using if-else or switch statement
//       if (strCombo.includes("+")) {
//         const values = strCombo.split("+");
//         result = Number(values[0].trim()) + Number(values[1].trim());
//       } else if (strCombo.includes("-")) {
//         const values = strCombo.split("-");
//         result = Number(values[0].trim()) - Number(values[1].trim());
//       } else if (strCombo.includes("*")) {
//         const values = strCombo.split("*");
//         result = Number(values[0].trim()) * Number(values[1].trim());
//       } else if (strCombo.includes("/")) {
//         const values = strCombo.split("/");
//         result = Number(values[0].trim()) / Number(values[1].trim());
//       } else {
//         result = "Error"; // Handle invalid or unrecognized expressions
//       }

//       // Update the screen with the result
//       value.textContent = result;

//       // Log the concatenated expression (before the "=" is pressed)
//       console.log("Concatenated Expression: ", strCombo);
//     } else if (keyValue === "C") {
//       // If "C" key is pressed, clear the screen
//       value.textContent = "0";
//     } else {
//       // For numbers and operators, append the clicked key to the text content
//       if (value.textContent === "0" && keyValue !== "0") {
//         value.textContent = keyValue; // Replace leading zero with the new value
//       } else {
//         value.textContent += keyValue; // Append the value to the existing string
//       }

//       // Log the current value of the screen after the key is pressed
//       console.log("Current Display: ", value.textContent);
//     }
//   }
// });
