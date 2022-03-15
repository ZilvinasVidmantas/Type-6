import categories from '../data/categories.js';
import Category from '../types/category.js';

export type CategoryChangeCallback = (categoryName: string) => void;

class CategorySelect {
  static categories: Category[] = categories;

  private static handleChange: CategoryChangeCallback | null = null;

  static renderOptions = (): string => {
    const blankOption = '<option value="all">Select Category</option>';
    const categoryOptions = CategorySelect.categories
      .map((x) => `
      '<option value="${x.name}">${x.name}</option>'
    `);
    return blankOption + categoryOptions;
  };

  static handleOptionChange(this: HTMLSelectElement) {
    if (!CategorySelect.handleChange) {
      console.error('No category change implementation');
    } else {
      CategorySelect.handleChange(this.value);
    }
  }

  static onCategoryChange = (callback: CategoryChangeCallback) => {
    CategorySelect.handleChange = callback;
  };

  static render = (): HTMLSelectElement => {
    const categorySelect = document.createElement('select');
    categorySelect.addEventListener('change', CategorySelect.handleOptionChange);
    categorySelect.innerHTML = CategorySelect.renderOptions();

    return categorySelect;
  };
}

export default CategorySelect;
