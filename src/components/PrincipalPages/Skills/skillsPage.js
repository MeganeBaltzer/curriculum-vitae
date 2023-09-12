import { useState } from 'react';
import NameFilter from './nameFilter';
import CategoryFilter from './categoryFilter';
import Skills from './skills';
import { skills } from '../../../datas/skills';

function SkillsPage() {
  const [filteredByTheName, setFilteredByTheName] = useState('');
  const [filteredByCategory, setfilteredByCategory] = useState('');

  return (
    <div>
      <NameFilter
        filteredByTheName={filteredByTheName}
        setFilteredByTheName={setFilteredByTheName}
      />
      <CategoryFilter
        filteredByCategory={filteredByCategory}
        setfilteredByCategory={setfilteredByCategory}
      />
      <Skills
        filteredByTheName={filteredByTheName}
        filteredByCategory={filteredByCategory}
        skills={skills}
      />
    </div>
  );
}

export default SkillsPage;
