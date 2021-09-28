function categoryItemComponent(categoryName) {
  // You are going to add your HTML design here.
  // Do the option design in HTML page, test it, and replace it if you need instead of this code.
  // For any variiables, just use the interpolation operation ${} and pass the variable
  return `
            <option value="${categoryName}" class="category-item">${categoryName}</option>
    `;
}
