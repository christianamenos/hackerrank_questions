/*
For this exercise the best thing we can do is to first get the lines as input.
Then, we will need to separate them into different lines if the input is separed by a jump line character.
Then for each line, we should be able to separate  the flag S/C the flag M/V/C and the word/s to separate or combine.
Finally, we would need to apply the split or combine logic.
For M, we would need to remove/add the parenthesis at the end.
For C, the first word is uppercased, so we need to check this properly.
For V, we just need to cammel case as usual.
In order to split the words, we will need to go through the string, after the flags, and look for the uppercase letters.
For the combination, we would just need to split the string by space and join them, capitalizing the first letter.
*/
function combineMethod(words: string[]): string {
  return combineVariable(words) + "()";
}

function combineVariable(words: string[]): string {
  let endString = words[0];
  for (let i = 1; i < words.length; i++) {
    endString += capitalizeWord(words[i]);
  }
  return endString;
}

function combineClass(words: string[]): string {
  return capitalizeWord(combineVariable(words));
}

function capitalizeWord(text: string): string {
  return text[0].toUpperCase() + text.substring(1);
}

function combine(mvcFlag: string, words: string) {
  let allWords = words.split(" ");
  switch (mvcFlag) {
    case "M":
      console.log(combineMethod(allWords));
      break;
    case "V":
      console.log(combineVariable(allWords));
      break;
    case "C":
      console.log(combineClass(allWords));
      break;
  }
}

function undercaseFirstWord(text: string): string {
  return text[0].toLocaleLowerCase() + text.substring(1);
}

function splitMethodName(text: string): string {
  return splitVariableName(text.substring(0, text.length - 2));
}

function isUppercase(character: string): boolean {
  return character < "a";
}

function getUppercasePositions(text: string): number[] {
  let positions = new Array();
  for (let i = 0; i < text.length; i++) {
    if (isUppercase(text[i])) positions.push(i);
  }
  return positions;
}

function splitVariableName(text: string): string {
  let finalString = "";
  let incrementalIndex = 0;
  const uppercasePositions = getUppercasePositions(text);
  for (let i = 0; i < uppercasePositions.length; i++) {
    finalString += text.substring(0, uppercasePositions[i] - incrementalIndex) + " ";
    text = undercaseFirstWord(text.substring(uppercasePositions[i] - incrementalIndex));
    incrementalIndex += uppercasePositions[i];
  }
  finalString += text;
  return finalString;
}

function splitClassName(text: string): string {
  return splitVariableName(undercaseFirstWord(text));
}

function split(mvcFlag: string, words: string) {
  switch (mvcFlag) {
    case "M":
      console.log(splitMethodName(words));
      break;
    case "V":
      console.log(splitVariableName(words));
      break;
    case "C":
      console.log(splitClassName(words));
      break;
  }
}

function main() {
  // Enter your code here
  let iterate = true;
  while (iterate) {
    try {
      let line = readLine().trim();
      let lineComponents = line.split(";");
      if (lineComponents[0] === "S") {
        split(lineComponents[1], lineComponents[2]);
      } else {
        combine(lineComponents[1], lineComponents[2]);
      }
    } catch (err) {
      iterate = false;
    }
  }
}
