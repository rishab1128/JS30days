const key=document.querySelectorAll('.key');
console.log(key);

const keys=document.querySelector('.keys');
console.log(keys);

const audios=document.getElementsByTagName('audio');
//console.log(audios[0].dataset.key);

document.body.addEventListener('keydown',runEvent);

function runEvent(e){
    console.log(e.keyCode);

    //Method-1
    /*for(let i=0; i<audios.length; i++)
    {
        if(e.keyCode==audios[i].dataset.key)
        {
            console.log(audios[i]);
            audios[i].play();
            break;
        }
    }*/

    //Method-2
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio)
        return ; //stops the func from running all together
    audio.currentTime=0; //rewind to the start
    audio.play();

}