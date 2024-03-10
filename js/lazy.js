const videos = document.querySelectorAll('.videoYoutbe');
const ownvideos = document.querySelectorAll('.own');

function generateUrl(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

function addButton() {
  const btn = document.createElement('button');
  btn.classList = ' video-play btn-reset';
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '68');
  svg.setAttribute('height', '48');
  svg.setAttribute('viewBox', '0 0 68 48');
  const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path1.classList = 'video-play-shape ';
  path1.setAttribute(
    'd',
    'M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z'
  );
  const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path2.classList = 'video-play-icon';
  path2.setAttribute('d', 'M 45,24 27,14 27,34');
  svg.append(path1, path2);
  btn.append(svg);
  return btn;
}

//creating button
//const btns = document.querySelectorAll('.button');
//btns.forEach((el) => {
//const svg = document.createElement('svg');
// let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
// svg.setAttribute('width','68');
// svg.setAttribute('height','48');
// svg.setAttribute('viewBox','0 0 68 48');
// const path1=document.createElementNS('http://www.w3.org/2000/svg','path');
// path1.classList='video-play-shape';
// path1.setAttribute('d','M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z');
// const path2=document.createElementNS('http://www.w3.org/2000/svg','path');
// path2.classList='video-play-icon';
// path2.setAttribute('d','M 45,24 27,14 27,34');
// svg.append(path1,path2);
//el.append(addButton());
//});

// creating iframe
function createIframe(id) {
  let iframe = document.createElement('iframe');
  iframe.setAttribute('width', '100%');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay; encrypted-media');
  iframe.setAttribute('src', generateUrl(id));
  return iframe;
}
//цикл из видосиков
if (videos) {
  videos.forEach((el) => {
    //el.style.setProperty('position', 'relative');
    //el.append(addButton());

    let videoHref = el.dataset.video;
    console.log(videoHref);
    //let deleted = "https://youtu.be/".length;//16
    let videoId = videoHref.substring(17, 28);
    console.log(videoId);
    //let img = el.querySelector('.youtuImg');
    let youtubeImgSrc = 'https://i.ytimg.com/vi/' + videoId + '/mqdefault.jpg';

    console.log(youtubeImgSrc);
    //img.setAttribute('src', youtubeImgSrc);
    const img = document.createElement('img');
    img.classList = 'youtubImg';
    img.setAttribute('src', youtubeImgSrc);
    img.setAttribute('alt', 'videoYoutube');
    el.append(img);
    el.addEventListener('click', (e) => {
      e.preventDefault();

      let iframe = createIframe(videoId);
      el.querySelector('.youtubImg').remove();
      el.appendChild(iframe);
      el.querySelector('button').remove();
    });
  });
}

ownvideos.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    el.setAttribute('controls', '');
    el.play();
  });
});
