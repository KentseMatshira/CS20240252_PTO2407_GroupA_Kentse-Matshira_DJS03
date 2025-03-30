// @ts-check

import { books, authors, genres, BOOKS_PER_PAGE } from './data.js';

class BookPreview {
    constructor(book) {
        this.book = book;
        this.element = this.createElement();
    }

    createElement() {
        const { author, id, image, title } = this.book;
        const element = document.createElement('button');
        element.classList.add('preview');
        element.setAttribute('data-preview', id);
        element.innerHTML = `
            <img class="preview__image" src="${image}" />
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[author]}</div>
            </div>
        `;
        return element;
    }
}

     /**
      * Create a Book instance.
      * @param {string} id
      * @param {string} title
      * @param {string} author
      * @param {string} image
      * @param {string} description
      * @param {string[]} genres
      * @param {number} published
      */
     constructor(id, title, author, image, description, genres, published) {
         this.id = id;
         this.title = title;
         this.author = author;
         this.image = image;
         this.description = description
         this.genres = genres;
         this.published = published;
     }
     renderPreview() {
         const element = document.createElement('button');
         element.classList.add('preview');
         element.setAttribute('data-preview', this.id);

    starting.appendChild(element)
      element.innerHTML = `
             <img class="preview__image" src="${this.image}" />
             <div class="preview__info">
             <h3 class="preview__title">${this.title}</h3>
             <div class="preview__author">${authors[this.author]}</div>
             </div>
         `;
         return element;
}

document.querySelector('[data-list-items]').appendChild(starting)

/**
  * Dynamic filter options (dropdown)
  * @param {object} data
  * @param {string} firstOptionText
  * @param {string} selectElement
  */
 function renderOptions(selectElement, data, firstOptionText) {
     const fragment = document.createDocumentFragment();
     const firstOption = document.createElement('option');
     firstOption.value = 'any';
     firstOption.innerText = firstOptionText;
     fragment.appendChild(firstOption);
 
     // Null check before appending the fragment
     if (targetElement) {
         targetElement.appendChild(fragment);
     } else {
         console.error(`Element with selector "${selectElement}" not found.`);
     }

/**
  * Render a list of books in container.
  * @param {Array<object>} booksToRender
  * @param {string} container
  * @param {number} page
  * @param {number} booksPerPage
  */
 
 function renderBooks(booksToRender, container, page, booksPerPage) {
     const fragment = document.createDocumentFragment();
     const start = (page - 1) * booksPerPage;
     const end = start + booksPerPage;
     const booksSlice = booksToRender.slice(start, end);

    booksSlice.forEach(book => {
         const bookInstance = new Book(
             book.id,
             book.title,
             book.author,
             book.image,
             book.description,
             book.genres,
             book.published);
         fragment.appendChild(bookInstance.renderPreview());
     };
 
     document.querySelector(container).appendChild(fragment)
 };
 
 renderBooks(books, '[data-list-items]', 1, BOOKS_PER_PAGE);
 
document.querySelector('[data-search-genres]').appendChild(genreHtml)

const authorsHtml = document.createDocumentFragment()
const firstAuthorElement = document.createElement('option')
firstAuthorElement.value = 'any'
firstAuthorElement.innerText = 'All Authors'
authorsHtml.appendChild(firstAuthorElement)

for (const [id, name] of Object.entries(authors)) {
    const element = document.createElement('option')
    element.value = id
    element.innerText = name
    authorsHtml.appendChild(element)
}

document.querySelector('[data-search-authors]').appendChild(authorsHtml)

const themeElement = document.querySelector('[data-settings-theme]');
 
if (themeElement instanceof HTMLSelectElement) {
     const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
     setTheme(isDarkMode ? 'night' : 'day');
 } else {
     console.error('Theme element not found or is not a select element.');
 }
 else {
    document.querySelector('[data-settings-theme]').value = 'day'
    document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
    document.documentElement.style.setProperty('--color-light', '255, 255, 255');
}
// Handle the "Show more" button state
 const listButton = document.querySelector('[data-list-button]');
 if (listButton instanceof HTMLButtonElement) {
     listButton.innerText = `Show more (${books.length - BOOKS_PER_PAGE})`;
     listButton.disabled = (matches.length - (page * BOOKS_PER_PAGE)) <= 0;
 
listButton.innerHTML = `
         <span>Show more</span>
         <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
     `;
 }
// Event Listeners (Optional Chaining)
 const searchCancel = document.querySelector('[data-search-cancel]');
 const settingsCancel = document.querySelector('[data-settings-cancel]');
 const headerSearch = document.querySelector('[data-header-search]');
 const headerSettings = document.querySelector('[data-header-settings]');
 const listClose = document.querySelector('[data-list-close]');
 const settingsForm = document.querySelector('[data-settings-form]');
 const searchForm = document.querySelector('[data-search-form]');
 const listItems = document.querySelector('[data-list-items]');
 
 searchCancel?.addEventListener('click', () => {
     document.querySelector('[data-search-overlay]')?.setAttribute('open', 'false');
 });

document.querySelector('[data-settings-cancel]')?.addEventListener('click', () => {
     document.querySelector('[data-settings-overlay]')?.setAttribute('open', 'false');
 });

document.querySelector('[data-header-search]')?.addEventListener('click', () => {
     document.querySelector('[data-search-overlay]')?.setAttribute('open', 'true');
     document.querySelector('[data-search-title]')?.focus();
 });
 

document.querySelector('[data-header-settings]')?.addEventListener('click', () => {
     document.querySelector('[data-settings-overlay]')?.setAttribute('open', 'true');
 });

document.querySelector('[data-list-close]')?.addEventListener('click', () => {
     document.querySelector('[data-list-active]')?.setAttribute('open', 'false');
 });

document.querySelector('[data-settings-form]')?.addEventListener('submit', (event) => {
     event.preventDefault();
     const formData = new FormData(event.target);
     const { theme } = Object.fromEntries(formData);

    if (theme === 'night') {
        document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
        document.documentElement.style.setProperty('--color-light', '10, 10, 20');
    } else {
        document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
        document.documentElement.style.setProperty('--color-light', '255, 255, 255');
    }
    
    document.querySelector('[data-settings-overlay]').open = false
})

document.querySelector('[data-search-form]').addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const filters = Object.fromEntries(formData)
    const result = []
// Handling for Search Form
 document.querySelector('[data-search-form]')?.addEventListener('submit', (event) => {
     event.preventDefault();
     const formData = new FormData(event.target);
     const filters = Object.fromEntries(formData);

       const result = books.filter((book) => {
         const genreMatch = filters.genre === 'any' || book.genres.includes(filters.genre);
         const titleMatch = !filters.title.trim() || book.title.toLowerCase().includes(filters.title.toLowerCase());
         const authorMatch = filters.author === 'any' || book.author === filters.author;

       
  return genreMatch && titleMatch && authorMatch;
     });

    page = 1;
    matches = result;

     const listMessage = document.querySelector('[data-list-message]');

    if (result.length < 1) {
        listMessage?.classList.add('list__message_show');
    } else {
         listMessage?.classList.remove('list__message_show');
    }

     const listItems = document.querySelector('[data-list-items]');
     if (listItems) {
         listItems.innerHTML = '';
         const newItems = document.createDocumentFragment();
 listItems.appendChild(newItems);
     }
 
     document.querySelector('[data-list-button]')?.setAttribute('disabled', matches.length - (page * BOOKS_PER_PAGE) <= 0);
     window.scrollTo({ top: 0, behavior: 'smooth' });
     document.querySelector('[data-search-overlay]')?.setAttribute('open', 'false');
 });
// List Item Click Handler
 listItems?.addEventListener('click', (event) => {
     const target = event.target.closest('[data-preview]');
     if (target) {
         const active = books.find(book => book.id === target.dataset.preview);
         const listActive = document.querySelector('[data-list-active]');
         const titleElement = listActive?.querySelector('[data-list-title]');
         const imageElement = listActive?.querySelector('[data-list-image]');
         const descriptionElement = listActive?.querySelector('[data-list-description]');
 
         if (listActive && titleElement && imageElement && descriptionElement) {
             listActive.setAttribute('open', 'true');
             titleElement.innerText = active.title;
             imageElement.src = active.image;
             descriptionElement.innerText = active.description;
 
    }
    

})