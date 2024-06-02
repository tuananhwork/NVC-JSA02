const spotifyApiConfig = {
  clientID: '2d71af0a9633424cba1044e054bb0916',
  clientSecret: 'e4cc1439e6ea4d4382c5c5f6b1f172cd',
};

const getSpotifyAccessToken = async () => {
  const url = 'https://accounts.spotify.com/api/token';
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + btoa(spotifyApiConfig.clientID + ':' + spotifyApiConfig.clientSecret),
  };
  const body = 'grant_type=client_credentials';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: body,
    });
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Error fetching Spotify access token', error);
    return null;
  }
};

const getAlbums = async () => {
  const accessToken = await getSpotifyAccessToken();
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };
  const url = 'https://api.spotify.com/v1/browse/new-releases?limit=6';

  try {
    const response = await fetch(url, { headers: headers });
    const data = await response.json();
    return data.albums.items;
  } catch (error) {
    console.error('Error fetching albums', error);
    return [];
  }
};

const getArtists = async () => {
  const accessToken = await getSpotifyAccessToken();
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };
  const url = 'https://api.spotify.com/v1/browse/categories/toplists/playlists?limit=6';

  try {
    const response = await fetch(url, { headers: headers });
    const data = await response.json();
    const playlistId = data.playlists.items[Math.floor(Math.random() * data.playlists.items.length)].id;
    const playlistUrl = `https://api.spotify.com/v1/playlists/${playlistId}/tracks?fields=items(track(artists(id,name)))&limit=6`;

    const playlistResponse = await fetch(playlistUrl, { headers: headers });
    const playlistData = await playlistResponse.json();
    const artists = playlistData.items
      .map((item) =>
        item.track.artists.map((artist) => ({ id: artist.id, name: artist.name, image: artist.images[0].url }))
      )
      .flat()
      .slice(0, 6);
    return artists;
  } catch (error) {
    console.error('Error fetching random artists', error);
    return [];
  }
};

export { getAlbums, getArtists };
