import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SearchableList from './component/searchable-list/SearchableList';
import { SectionHeader } from './@types/component/searchable-list/SearchableList';
import { absentData, presentData } from './data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const searchData: SectionHeader[] = [
  {
    id: 1,
    label: "Absent",
    items: absentData
  },
  {
    id: 2,
    label: "Attended",
    items: presentData
  }
];

root.render(
  <React.StrictMode>
    <SearchableList items={searchData} /> 
  </React.StrictMode>
);
