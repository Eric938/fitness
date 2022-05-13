const videoContainer = document.querySelector('[data-video-container]');
const video = document.querySelector('[data-video]');
const pause = document.querySelector('[data-video-pause]');

const addEventClickOnVideo = () => {
  if (videoContainer) {
    videoContainer.addEventListener('click', () => {
      if (!videoContainer.classList.contains('is-active')) {
        if (video) {
          video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }
        videoContainer.classList.add('is-active');
      } else {
        if (video) {
          video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
        videoContainer.classList.remove('is-active');
      }
    });
  }
};

const addEventFocusOnVideo = () => {
  if (pause) {
    pause.addEventListener('focusin', () => {
      if (video) {
        video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      }
      if (videoContainer) {
        videoContainer.classList.add('is-active');
      }
    });
  }

  if (pause) {
    pause.addEventListener('focusout', () => {
      if (video) {
        video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
      if (videoContainer) {
        videoContainer.classList.remove('is-active');
      }
    });
  }
};

export {addEventClickOnVideo, addEventFocusOnVideo};
