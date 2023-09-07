var arr =[
    {dp:"https://images.pexels.com/photos/2065203/pexels-photo-2065203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",story:"https://images.pexels.com/photos/3598254/pexels-photo-3598254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {dp:"https://images.pexels.com/photos/2790437/pexels-photo-2790437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",story:"https://images.pexels.com/photos/247200/pexels-photo-247200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {dp:"https://images.pexels.com/photos/3757032/pexels-photo-3757032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",story:"https://images.pexels.com/photos/991087/pexels-photo-991087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {dp:"https://images.pexels.com/photos/2772092/pexels-photo-2772092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",story:"https://images.pexels.com/photos/3561863/pexels-photo-3561863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {dp:"https://images.pexels.com/photos/1028927/pexels-photo-1028927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",story:"https://images.pexels.com/photos/1007053/pexels-photo-1007053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
];
var storybox = document.querySelector
('#story-box');
var screen = document.querySelector('#fullscreen');
var clutter = '';
arr.forEach(function(elem,idx){
    clutter += ` <div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`

})

storybox.innerHTML= clutter;
storybox.addEventListener('click',function(dets){
 screen.style.display='block';
 screen.style.backgroundImage = `url(${arr[dets.target.id].story})`;

 setTimeout(() => {
    screen.style.display ='none';
 }, 3000);

})

