//导入标签数组
let click_event = document.getElementById("input");
let output = document.getElementById("output");
let caidan = document.getElementById("caidan");
click_event.addEventListener("click",Input);

//输入
function Input(){
    let id = prompt("输入你的身份码");
    return Organize(id);
}

//输入值整理
function Organize(id){
    let str1 = '';
    let l = id.length;
    console.log(id);
    for(let i=0;i<l;i++){
        if (id[i] >= '0' && id[i] <= '9'){
            str1 += id[i];
        }
    }
    console.log(str1);
    work(str1);
}


//解码+计算
function work(str){
    //解参数
    try {
        let len = str.length;
        let id = 0;
        let p1 = eval(str[0] + str[1]);
        let p3 = eval(str[str.length - 2] + str[str.length - 1]);
        let p2 = '';
        for(let i=2;i<len-2;i++){
            p2 += str[i];
        }
        p2 = eval(p2)
        //console.log(p2,p3,p1);
    
        //计算 
        id = p2 / p1 - p3;
        //console.log(id);
        return Output(id);
    }catch{
        return Output(1,false);
    }

}

//输出
function Output(id,w=true){
    let id_html = '';
    if(w){
        if(id==1){
            id_html = "<h2>你是主公</h2>";
        }else if(id==2){
            id_html = "<h2>你是忠臣</h2>";
        }else if(id==3){
            id_html = "<h2>你是反贼</h2>";
        }else if(id==4){
            id_html = "<h2>你是内奸</h2>";
        }else{
            return Output(id,w=false);
        }
        caidan.innerHTML = '<hr><a href="https://space.bilibili.com/521896948?spm_id_from=333.1365.0.0">↓点击关注这个帅哥↓<br><img width="200" src="./img/20170528210905_LRhc8.png" alt="小远Chris的写真"></a>';
    
    }else{
        id_html = "<h2>解码失败:(<br><h3>请检查编码是否正确或是否出现多余字符！</h3></h2>";
    }

    output.innerHTML = id_html
    return 0;
}
