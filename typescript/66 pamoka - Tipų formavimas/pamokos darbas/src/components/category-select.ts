import categories from '../data/categories.js';
import Category from '../types/category.js';

export type CategoryChangeCallback = (categoryName: string) => void;

class CategorySelect {
  private static categories: Category[] = categories;

  private static handleChange: CategoryChangeCallback | null = null;

  private static renderOptions = (): string => {
    const blankOption = '<option value="all">Select Category</option>';
    const categoryOptions = CategorySelect.categories
      .map((x) => `
      '<option value="${x.name}">${x.name}</option>'
    `);
    return blankOption + categoryOptions;
  };

  private static handleOptionChange(this: HTMLSelectElement) {
    if (CategorySelect.handleChange) {
      CategorySelect.handleChange(this.value);
    }
  }

  public static onCategoryChange = (callback: CategoryChangeCallback) => {
    CategorySelect.handleChange = callback;
  };

  public static render = (): HTMLSelectElement => {
    const categorySelect = document.createElement('select');
    categorySelect.addEventListener('change', CategorySelect.handleOptionChange);
    categorySelect.innerHTML = CategorySelect.renderOptions();

    return categorySelect;
  };
}

export default CategorySelect;
