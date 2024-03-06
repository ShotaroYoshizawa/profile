//About　のスライド移行

const img = ["picture/tanbo/tanbo1.jpg",
    "picture/tanbo/tanbo2.jpg",
    "picture/tanbo/tanbo3.jpg",
    "picture/tanbo/tanbo4.jpg",
    "picture/tanbo/tanbo5.jpg",
    "picture/tanbo/tanbo6.jpg"];
let count = -1;
picChange();
function picChange() {
    count++;
    if (count == img.length) count = 0;
    //画像選択
    changePic.src = img[count];
    //秒数の指定
    setTimeout("picChange()", 8000);
}