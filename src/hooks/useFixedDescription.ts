import { useMemo } from 'react';

export const useFixedDescription = (str: string | null | undefined) => {
  const replacedString = useMemo(() => {
    const htmlEntities: { [index: string]: string } = {
      nbsp: ' ',
      cent: '¢',
      pound: '£',
      yen: '¥',
      euro: '€',
      copy: '©',
      reg: '®',
      lt: '<',
      gt: '>',
      quot: '"',
      amp: '&',
      apos: "'",
    };
    if (str) {
      return str.replace(/&([^;]+);/g, function (entity, entityCode) {
        let match;

        if (entityCode in htmlEntities) {
          return htmlEntities[entityCode];
        } else if ((match = entityCode.match(/^#x([\da-fA-F]+)$/))) {
          return String.fromCharCode(parseInt(match[1], 16));
        } else if ((match = entityCode.match(/^#(\d+)$/))) {
          return String.fromCharCode(~~match[1]);
        } else {
          return entity;
        }
      });
    }
  }, [str]);

  return replacedString;
};
