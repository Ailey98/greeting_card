/**
 * Created by Administrator on 2016/6/13.
 */
window.onload=function(){
    /*console.log("��ҳ�ɼ������"+document.body.clientWidth);
    console.log("��ҳ�ɼ�����ߣ�"+document.body.clientHeight);
    console.log("��ҳ�ɼ������(�������ߵĿ�)��"+document.body.offsetWidth);
    console.log("��ҳ�ɼ������(�������ߵĿ�)��"+document.body.offsetWidth);
    console.log("��ҳ����ȫ�Ŀ�"+document.body.scrollWidth);
    console.log("��ҳ����ȫ�ĸߣ�"+document.body.scrollHeight);
    console.log("��ҳ����ȥ�ĸߣ�"+document.body.scrollTop);
    console.log("��ҳ����ȥ����"+document.body.scrollLeft);
    console.log("��ҳ���Ĳ����ϣ�"+document.screenTop);
    console.log("��ҳ���Ĳ�����"+document.screenLeft);
    console.log("��Ļ�ֱ��ʵĸߣ�"+document.screen.height);
    console.log("��Ļ�ֱ��ʵĿ�"+document.screen.width);
    console.log("��Ļ���ù������߶ȣ�"+document.screen.availHeight);
    console.log("��Ļ���ù�������ȣ�"+document.screen.availWidth);*/

    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");

    var music=document.getElementById("music");
    var audio=document.getElementsByTagName("audio")[0];

    //�����ֲ�����ֹͣʱ���Զ�ֹͣ������תЧ��
    audio.addEventListener("ended",function(event){
        music.setAttribute("class","");
        //music.style.animationPlayState = "paused";
        //music.style.webkitAnimationPlayState = "paused";
    },false);

    //�������ͼ�꣬�������ֲ���Ч��
    /*music.onclick=function(){
        if(audio.paused){
            audio.play();
            this.setAttribute("class","play");
            //this.style.animationPlayState = "running";
            //this.style.webkitAnimationPlayState = "running";
        }
        else{
            audio.pause();
            this.setAttribute("class","");
           // this.style.animationPlayState = "paused";
            //this.style.webkitAnimationPlayState = "paused";
        }

    };*/

    music.addEventListener("touchstart",function(event){
        if(audio.paused){
            audio.play();
            this.setAttribute("class","play");
        }
        else{
            audio.pause();
            this.setAttribute("class","");
        }
    },false);

    page1.addEventListener("touchstart",function(event){
        page1.style.display="none";
        page2.style.display="block";
        page3.style.display="block";
        page3.style.top    ="100%";

        setTimeout(function(){
            page2.setAttribute("class","page fadeOut");
            page3.setAttribute("class","page fadeIn");
        },5500);

    },false);


};

