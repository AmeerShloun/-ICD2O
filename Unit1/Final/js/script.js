
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');
    const searchInput = document.getElementById('searchInput');

    // Open Google search in new tab
    searchButton.addEventListener('click', () => {
      const query = (searchInput.value || '').trim();
    if(query !== '') {
        const url = 'https://www.google.com/search?q=' + encodeURIComponent(query + '');
    window.open(url, '_blank');
      }
    });

    // Clear input field
    clearButton.addEventListener('click', () => {
      searchInput.value = '';
    searchInput.focus();
    });
