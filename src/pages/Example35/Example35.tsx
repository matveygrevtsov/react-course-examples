import { useState, useTransition } from "react";
import { WordsList } from "./components/WordsList/WordsList";

import s from "./styles.module.css";

enum ETab {
  Tab1 = "Tab1",
  Tab2 = "Tab2",
  Tab3 = "Tab3",
}

export const Example35 = () => {
  const [activeTab, setActiveTab] = useState<ETab>(ETab.Tab1);
  const [loading, setTransition] = useTransition();

  const handleTabChange = (newTab: ETab) => {
    setTransition(() => setActiveTab(newTab));
  };

  return (
    <>
      <ul className={s.tabs}>
        {Object.values(ETab).map((tab) => (
          <li key={tab}>
            <button
              className={tab === activeTab ? s.activeTab : undefined}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
      {activeTab === ETab.Tab1 && <WordsList />}
      {activeTab === ETab.Tab2 && <WordsList />}
      {activeTab === ETab.Tab3 && <WordsList />}
      {loading && <h3>Загрузка...</h3>}
    </>
  );
};
