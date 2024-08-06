export const useDictionary = () => {
  const dictionary = [
    {
      label: "Greetings",
      code: "LT",
      text: "Sveiki",
    },
    {
      label: "Greetings",
      code: "LV",
      text: "Svieki",
    },
    {
      label: "Greetings",
      code: "EN",
      text: "Hello there",
    },
  ];

  const translate = (code: string, label: string) => {
    return dictionary.find((x) => x.code === code && x.label === label)?.text;
  };

  return { translate };
};
