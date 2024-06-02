import { getAlbums, getArtists } from './spotify-api.js';

const rowHandle = (arr, type = '', round = false) => {
  const rowEl = document.createElement('div');
  rowEl.className = 'row';
  const rowTitleEl = document.createElement('h3');
  rowTitleEl.className = 'title';
  rowTitleEl.textContent = `Popular ${type}`;
  const rowListEl = document.createElement('ul');
  rowListEl.className = 'row-list';
  const imgClass = round ? 'round' : '';
  arr.forEach((item) => {
    const rowItemEl = document.createElement('li');
    rowItemEl.className = 'row-item';
    rowItemEl.innerHTML = `
          <img src="${item.images[0].url}" alt="" class='${imgClass}'>
          <h3>${item.name}</h3>
          <span>${item.album_type}</span>
        `;
    rowListEl.appendChild(rowItemEl);
  });
  rowEl.appendChild(rowTitleEl);
  rowEl.appendChild(rowListEl);

  return rowEl;
};

const renderUI = async () => {
  const artistsEl = document.querySelector('.row.artists');
  const albumsEl = document.querySelector('.row.albums');
  const albums = await getAlbums();
  const artists = await getArtists();

  // artists.appendChild(rowHandle(artists, 'artists', true));
  albumsEl.appendChild(rowHandle(albums, 'albums'));
};

renderUI();
