import { useEffect, useState } from "react";
import DATA from "./data";

function findChildByText(data, searchText) {
  for (const item of data) {
    if (item.text === searchText) {
      return item;
    }
    if (item.child && item.child.length > 0) {
      const result = findChildByText(item.child, searchText);
      if (result) {
        return result;
      }
    }
  }
  return null;
}

function getAllTexts(data) {
  let texts = [];

  for (const item of data) {
    texts.push(item.text);
    if (item.child && item.child.length > 0) {
      texts = texts.concat(getAllTexts(item.child));
    }
  }

  return texts;
}

const Button = ({ text, selectedBtn, setSelectedBtn, visible }) => {
  const [btnVisible, setBtnVisible] = useState(visible);

  useEffect(() => {
    setBtnVisible(selectedBtn.includes(text));
  }, [selectedBtn]);


function handleClick(e, DATA, text, selectedBtn){
  e.preventDefault();
  e.stopPropagation();
  const item = findChildByText(DATA, text);
  if(item.child?.length > 0 && selectedBtn.includes(item.child[0].text)){
     const temp = selectedBtn.slice()
     const childText = getAllTexts(item.child.slice())
     console.log(childText)
     setSelectedBtn(temp.filter(x => !childText.includes(x)))
  } else {
    const child = item.child.map(x=> x.text);
    setSelectedBtn([...selectedBtn, ...child]);
  }
}

function countEachCharacter(text) {
  const charCount = {};

  for (const char of text) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
}

function getLeftMargin(text){
   return countEachCharacter(text)["."]
}

  return (
    <div
      className={btn ${!btnVisible ? "btn-invisible" : ""}}
      style={{ marginLeft: ${ 30 * getLeftMargin(text) }px }}
      onClick={e => handleClick(e, DATA, text, selectedBtn)}
    >
      <p>{text}</p>
    </div>
  );
};

export default Button;
