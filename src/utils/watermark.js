export function addWatermark(text) {
    const id = 'watermark-canvas';
  
    if (document.getElementById(id)) {
      return;
    }
  
    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', id);
    const ctx = canvas.getContext('2d');
  
    canvas.width = 400;
    canvas.height = 300;
    ctx.font = '16px Arial';
    ctx.fillStyle = 'rgba(184, 184, 184, 0.3)';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'Middle';
    ctx.rotate(-0.4); // 旋转角度
    ctx.fillText(text, 50, 100);
  
    const body = document.body;
    const watermarkDiv = document.createElement('div');
    watermarkDiv.style.pointerEvents = 'none';
    watermarkDiv.style.top = '30px';
    watermarkDiv.style.left = '30px';
    watermarkDiv.style.position = 'fixed';
    watermarkDiv.style.zIndex = '10';
    watermarkDiv.style.width = document.documentElement.clientWidth + 'px';
    watermarkDiv.style.height = document.documentElement.clientHeight + 'px';
    watermarkDiv.style.background = `url(${canvas.toDataURL('image/png')}) left top repeat`;
    body.appendChild(watermarkDiv);
  }
  