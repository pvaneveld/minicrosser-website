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
  dealerData.reduce((acc, curr) => {
    const { city, companyName, mail } = curr.node.frontmatter;
    return acc.concat({ value: JSON.stringify({ companyName, mail }), text: `${companyName} | ${city}` });
  }, []);
