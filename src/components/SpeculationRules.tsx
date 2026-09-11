import React from 'react';

export default function SpeculationRules() {
  const specRules = {
    prefetch: [
      {
        source: 'document',
        where: {
          and: [
            { href_matches: '/*' },
            { not: { href_matches: ['/api/*', '/*\\?(.+)'] } },
            { not: { selector_matches: 'a[rel~="nofollow"]' } }
          ]
        },
        eagerness: 'conservative'
      }
    ]
  };

  return (
    <script
      type="speculationrules"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(specRules) }}
    />
  );
}
