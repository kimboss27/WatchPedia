
/* -- 헤더 고정 -- */
const header=document.querySelector('#header');
const contents=document.querySelector('#contents');
const contentsTop=contents.offsetTop;

/* -- contents top부분에서 position: fixed --*/
window.addEventListener('scroll',function(){
    let scroll=window.scrollY;
    if(scroll>=contentsTop){
        header.style.position="fixed"
    }else {
        header.style.position="relative"
    }
});

/* -- 슬라이드 영역 -- */

const list=document.querySelectorAll('.container');
const movielsit=document.querySelectorAll('.container .movie');
const prev=document.querySelectorAll('.prev');
const next=document.querySelectorAll('.next');
let movielists=movielsit.length/3;
let list_move=0;
let show=0;
let move_percent=0;
let max_move=0;

/* -- 클릭 이벤트 방지 -- */

const movieA=document.querySelectorAll('.movie');
for(let a=0; a<movieA.length; a++){
    movieA[a].addEventListener('click',function(e){
        e.preventDefault();
    })
}

/* -- slide 이동 -- */

/* --  해상도 변경시 리스트 보여지는 개수 --*/
function responsive(){
    if(window.innerWidth>1024){show=5} /* 보여지는 리스트 개수 */
    else if(window.innerWidth>640){show=4}
    else{show=2}
    move_percent=movielists*10/show; /* 이동 거리 퍼센트 */
    max_move=10-show; /* 리스트 끝에 도착 */
}

/* -- 클릭 이벤트 -- */
for(let n=0; n<next.length; n++){
    let list_move=0;
    next[n].addEventListener('click',function(e){
        e.preventDefault();
        responsive();
        if(list_move==0){prev[n].style.display='flex'}
        list_move++;
        list[n].style.left=`-${move_percent*list_move}%`;
        if(list_move==max_move){
            next[n].style.display='none';
            prev[n].style.display='flex';
        }
    })
    prev[n].addEventListener('click',function(e){
        e.preventDefault();
        responsive();
        if(list_move==max_move){next[n].style.display='flex'}
        list_move--;
        list[n].style.left=`-${move_percent*list_move}%`;
        if(list_move==0){prev[n].style.display='none'}
    })
    window.addEventListener('resize',function(){
        list_move=0;
    })
}

/* 해상도 변경하면 초기화 */
window.addEventListener('resize',function(){
    list_move=0;
    for(let p=0; p<prev.length; p++){
        prev[p].style.display='none';
        next[p].style.display='flex';
        list[p].style.left=0;   
    }
})
/* -- 언어선택화면 --*/
const pop=document.querySelector('.lang > button');
const popbg=document.querySelector('.pop_bg');
const body=document.querySelector('body');
const xicon=document.querySelector('.xicon')
pop.addEventListener('click',function(){
    popbg.style.display='block'
    html.style.overflow='hidden'
})
xicon.addEventListener('click',function(e){
    e.preventDefault()
    popbg.style.display='none'
    html.style.overflow='scroll'
})

/* -- 검색창 클릭 -- */
const search=document.querySelector('.search');
const mSearch=document.querySelector('.search_area');
const sClose=document.querySelector('.s_close');
const section=document.querySelector('section');
const tClose=document.querySelector('.t_close');
const sIcon=document.querySelector('.m_serachicon ');
sIcon.addEventListener('click',function(){
    mSearch.style.display='block';
    sIcon.style.display='none';
    
});
sClose.addEventListener('click',function(){
    mSearch.style.display='none';
    sIcon.style.display='block';
});
if(window.innerWidth<1025){
    search.addEventListener('click',function(){
        search.classList.add('on');
        tClose.style.display='flex'
    });
    tClose.addEventListener('click',function(){
        search.classList.remove('on');
        tClose.style.display='none';
    });
}else if(window.innerWidth>=1025){
    search.addEventListener('click',function(){
    });
}

/* -- 해상도 별 검색창 변동 -- */
window.addEventListener('resize',function(){
    if(this.window.innerWidth<1025){
        search.classList.remove('on');
        mSearch.classList.remove('on');
        search.addEventListener('click',function(){
            search.classList.add('on');
            tClose.style.display='flex'
        });
        tClose.addEventListener('click',function(){
            search.classList.remove('on');
            tClose.style.display='none';
        })
    }
    if(this.window.innerWidth>641){
        mSearch.style.display='none';
    }
    if(this.window.innerWidth<=641){
        sIcon.style.display='block';
    }
    
})

/* -- 모바일 메뉴 -- */
const menu=document.querySelector('.menu');
const m_gnb=document.querySelector('.gnb');
const close=document.querySelector('.close');
const html=document.querySelector('html');
menu.addEventListener('click',function(){
    m_gnb.style.right=0;
    html.style.overflow='hidden'
});
close.addEventListener('click',function(){
    m_gnb.style.right=-100+'%'
    html.style.overflow='scroll'
})

/* -- 상단 카테고리 클릭 -- */
const category=document.querySelector('.category')
const categoryAll=category.querySelectorAll('a')

for(let i=0; i<categoryAll.length; i++){
    categoryAll[i].addEventListener('click',function(e){
        e.preventDefault();
        for(let a=0; a<categoryAll.length; a++){
            if(categoryAll[a].classList.contains('active')){
                categoryAll[a].classList.remove('active');
            }
        }
        e.target.classList.add('active')
    })
}

/* -- 푸터 언어 선택 클릭 --*/
const langA=document.querySelectorAll('.lang_pop .wrapper > a')

for(let l=0; l<langA.length; l++){
    langA[l].addEventListener('click',function(e){
        for(let g=0; g<langA.length; g++){
            if(langA[g].classList.contains('active')){
                langA[g].classList.remove('active')
            }
        }
        e.target.classList.add('active')
    })
}