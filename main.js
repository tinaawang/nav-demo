



//初始化数据
var hashA = init();
var keys = hashA['keys'];
var hash = hashA['hash'];

generateKeyboard(keys, hash);
//监听键盘事件
listenToUser(hash);




function gtFromLocalStorage(name){

    return JSON.parse(localStorage.getItem(name) || 'null');
}

/*创建页面元素*/
function tag(tagName){
    return document.createElement(tagName);
}


//创建span标签
function createSpan(text){
    var span1 = tag('span');
    span1.className = 'text';
    span1.textContent =text;
    return span1;

}

//创建button标签
function createButton(id){
    var btn = tag('button');
    btn.textContent = "edit";
    btn.id = id;
    btn.onclick = function (ccc) {
        var key = ccc['target']['id'];
        var y = prompt('输入一个新网址');
        var btn2 = ccc['target'];
        var img2 = btn2.previousSibling;

        hash[key] = y;
        img2.src = 'http://' + y + '/favicon.ico'
        img2.onerror = function (e) {
            e.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png';

        }
        localStorage.setItem('zzz', JSON.stringify(hash));
    }
    return btn;
}

//创建img标签
function createImg(domain){
    var img1 = tag("img");
    if (domain) {
        img1.src = 'http://' + domain + '/favicon.ico'
    }
    else {
        img1.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png';
    }
    img1.onerror = function (e) {
        e.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png';

    }
    return img1;
}



function init(){
    var keys={
        '0': {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
        '1': {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
        '2': {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
        'length': 3
    }

    var  hash={
        'q': 'qq.com', 'w': 'weibo.com', 'e': 'ele.me', 'r': 'renren.com', 't': 'tianya.com',
        'y': 'youtube.com', 'u': 'uc.com' , 'i': 'iqiyi.com', 'o': 'opera.com', 'p': undefined,
        'a': 'acfun.tv', 's': 'sohu.com', 'z': 'zhihu.com', 'm': 'www.mcdonalds.com.cn'

    }

    //创建本地hash  用于hash的变更
    var hashInLocalStorage = gtFromLocalStorage('zzz');
    if(hashInLocalStorage)
    {
        hash = hashInLocalStorage;
    }
    return {
        "keys": keys,
        "hash": hash
    }
}




function  generateKeyboard(keys, hash){
    for( var index=0;index<keys.length;index++) {

        var div1 = tag('div');
        div1.className = 'row';
        var mainBox = document.getElementById('main-box');

        mainBox.appendChild(div1);

        var row=keys[index];
        for (var index2 = 0; index2 < row.length; index2++) {

            var span1 = createSpan(row[index2]);


            var btn = createButton(row[index2]);


            var img1 = createImg(hash[row[index2]]);


            var kbd1 = tag('kbd');
            kbd1.className = 'kbb';


            kbd1.appendChild(span1);
            kbd1.appendChild(img1);
            kbd1.appendChild(btn);
            div1.appendChild(kbd1);
        }

    }
}




/*监听键盘事件，跳转到响应的网站*/
function listenToUser(hash){
    document.onkeypress = function(aaa){

        var x=aaa['key'];

        var src=hash[x];
        window.open('http://'+src, '_blank')

    }
}





