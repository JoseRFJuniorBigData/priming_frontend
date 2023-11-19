import React from 'react';

const YouTube = () => {
  const videos = [
    {
      id: 'd1u234567890',
      title: 'Have',
      thumbnail: 'https://i.ytimg.com/an_webp/31QaNiKNCd4/mqdefault_6s.webp?du=3000&sqp=CPjz5KoG&rs=AOn4CLB1PNGrfNxOcAVZL-N4xCCJUSZ6xA',
      channel: 'dotCSV',
    },
    {
      id: 'd2u234567890',
      title: 'Dog',
      thumbnail: 'https://i.ytimg.com/an_webp/FGG7oxqUt0k/mqdefault_6s.webp?du=3000&sqp=CMD_5KoG&rs=AOn4CLAHSfVImIw_sX_Lt89AD68qlxpJ9Q',
      channel: 'dotCSV',
    },
 
  ];

  return (
    <div className="youtube">
      <h2>YouTube Shorts</h2>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank">
              <img src={video.thumbnail} alt={video.title} />
              <h3>{video.title}</h3>
            </a>
            <p>Channel: {video.channel}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YouTube;
