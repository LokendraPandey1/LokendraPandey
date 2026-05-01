const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, 'src', 'components', 'sections');
const files = fs.readdirSync(sectionsDir).map(file => path.join(sectionsDir, file));
files.push(path.join(__dirname, 'src', 'pages', 'Home.jsx'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace import
  content = content.replace(/import \{ portfolioData \} from '\.\.\/\.\.\/data\/portfolio';/g, "import { PortfolioContext } from '../../context/PortfolioContext';");
  content = content.replace(/import \{ portfolioData \} from '\.\.\/data\/portfolio';/g, "import { PortfolioContext } from '../context/PortfolioContext';");
  
  // Check if React is imported with useContext
  if (!content.includes('useContext')) {
    content = content.replace(/import React from 'react';/g, "import React, { useContext } from 'react';");
    content = content.replace(/import React, \{/g, "import React, { useContext,");
  }

  // Replace const { something } = portfolioData; with hook
  // Pattern: const { something } = portfolioData;
  const match = content.match(/const \{ ([^}]+) \} = portfolioData;/);
  if (match) {
    const vars = match[1];
    
    // We need to inject the hook and loading check right after the component declaration
    // Pattern: const ComponentName = () => {
    content = content.replace(/(const [A-Z][a-zA-Z0-9_]* = \([^)]*\) => \{)/, `$1\n  const { portfolioData, loading } = useContext(PortfolioContext);\n\n  if (loading || !portfolioData) return null;\n\n  const { ${vars} } = portfolioData;`);
    
    // Remove the old const { ... } = portfolioData;
    content = content.replace(new RegExp(`\\n\\s*const \\{ ${vars.replace(/,/g, ',?')} \\} = portfolioData;\\n`), '\n');
  }

  fs.writeFileSync(file, content);
  console.log('Updated ' + file);
});
