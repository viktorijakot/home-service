const getCategoryImage = (categoryType: string): string => {
  const categoryTypeObj = {
    cleaning: "cleaning.png",
    repair: "repair.png",
    painting: "painting.png",
    shifting: "shifting.png",
    plumbing: "plumbing.png",
    electric: "electric.png",
  };

  const selectedCategoryType = categoryTypeObj[categoryType as keyof typeof categoryTypeObj];

  return selectedCategoryType === undefined
    ? `../src/assets/images/default.png`
    : `../src/assets/images/${selectedCategoryType}`;
};

export default getCategoryImage;
