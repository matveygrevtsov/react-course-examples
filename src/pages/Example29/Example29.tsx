import { ChangeEventHandler, useDeferredValue, useMemo, useState } from "react";
import { words } from "./words";

// Данная функция считает, сколько символов из первой строки лежат во второй строке.
const stringsMatchIndex = (string1: string, string2: string): number => {
  return string1.split("").filter((char) => string2.includes(char)).length;
};

// Данный хук сортирует массив слов таким образом, что сначала отображаются слова, наиболее похожие на searchString.
const useSortedWords = (searchString: string) => {
  return useMemo(() => {
    const getMatchIndex = (word: string) => {
      return stringsMatchIndex(searchString, word);
    };
    const sortFunc = (word1: string, word2: string) => {
      return getMatchIndex(word2) - getMatchIndex(word1);
    };
    return [...words].sort(sortFunc);
  }, [searchString]);
};

export const Example29 = () => {
  const [searchString, setSearchString] = useState<string>("");
  const deferredSearchString = useDeferredValue(searchString);

  // const sortedWords = useSortedWords(deferredSearchString);
  const sortedWords = useSortedWords(searchString);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setSearchString(target.value);
  };

  return (
    <>
      <input value={searchString} onChange={handleInputChange} />

      <ul
        style={{
          height: "100px",
          overflow: "auto",
          paddingLeft: "2rem",
          flexShrink: 0,
        }}
      >
        {sortedWords.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </>
  );
};
