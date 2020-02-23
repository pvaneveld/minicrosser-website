interface DealerData {
  node: {
    frontmatter: {
      companyName: string;
      city: string;
      mail: string;
    };
  };
}
export const getDealerOptionsData = (dealerData: DealerData[]): { value: string; text: string }[] =>
  dealerData
    .sort((a, b) => (a.node.frontmatter.city > b.node.frontmatter.city ? 1 : -1))
    .reduce((acc, curr) => {
      const { city, companyName, mail } = curr.node.frontmatter;
      return acc.concat({ value: JSON.stringify({ companyName, mail }), text: `${city} | ${companyName} ` });
    }, []);
