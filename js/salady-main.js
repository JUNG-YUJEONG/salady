$(document).ready(function(){

    $(document).ready(function(){

        $(".menu_toggle_btn").click(function(){
            $(this).toggleClass("menu-open");
            $(".allmenu").slideToggle("fast");
        });
    
    });



    var oldidx=0;  //기존 이미지
    var idx=0;  //새로 바뀌는 이미지
    var img_n= $(".m_container ul li").length;  //1,2,3,4....갯수를 세어서 변수에 저장한다.  지가 알아서 롤링하는 이미지 갯수를 세어서~
                                                //**index는 순서 셀 때 0,1,2,3...

    //이미지와 버튼이 바뀌는 함수
    function changeImg(idx){  //매개변수가 있는 함수 -> idx는 선택되는 이미지
        
        if(oldidx!=idx){  //기존의 이미지와 선택된 이미지가 다를때,,
            
            $(".m_btn ul li").eq(idx).addClass("active");   //선택된 하단버튼 활성화 -> active 클래스를 불러냄
            $(".m_btn ul li").eq(oldidx).removeClass("active");  //기존 하단버튼 활성화 -> active 클래스를 삭제함
            $(".m_container ul li").eq(idx).stop(true,true).fadeIn(300);  //선택된 이미지가 나타남
            $(".m_container ul li").eq(oldidx).stop(true,true).fadeOut(300);  //기존 이미지가 사라짐
        }
        oldidx=idx;  //선택된 이미지는 다시 기존 이미지로 저장되어서 fade Out,, -> 지금 보이는 이미지도 다음 이미지가 나오면 헌거,,기존 이미지가 되는거니까.

    }

    //자동함수 생성 -> (클릭 이런 동작이 없어도) 몇 초 단위로 롤링되거라~
    function changeAuto(){
        idx++;  //idx를 증가하고
        
        //선택한 이미지가 마지막일때 다시 처음 이미지부터 시작
        if(idx>img_n-1){  //index는 0부터 시작하고 length는 1부터 시작하므로 -1로 1을 빼줘야 마지막 숫자가 맞음
            idx=0;
        }
        changeImg(idx);

    }

        /* setInterval(changeAuto,4000);  //4초 간격으로 함수를 자동생성*********비주얼에서 많이 쓰임!!! */

        timer=setInterval(changeAuto,4000);  //클릭이나 호버같은 동작이 발생하면 자동으로 멈추게 해야되는데, 
                                            //이땐 변수가 필요함. timer라는 변수 임의로 만든거.
                                                /*자동으로 롤링되는 순간 버튼을 클릭할때 동시에 움직여서 충돌이 날 수 있음
                                                    -> 모든 버튼을 클릭할때는 자동으로 이미지가 바뀌는 함수를 잠시 멈추어야 함*/
        //하단버튼 클릭시
        $(".m_btn ul li").click(function(){
            
            clearInterval(timer);  //버튼 클릭시 자동 함수 해지 ---> clearInterval(변수);
            idx=$(this).index();  //몇번째꺼를 누를 지 모르기 때문에 index~  0,1,2,,,,
            changeImg(idx);
            timer=setInterval(changeAuto,4000);  //버튼을 클릭 안할때는 다시 함수 자동 재생

        });


    });


/*
매개 변수란?
함수 외부에서 함수 내부로 데이터를 전달하기 위한 용도로 사용하는 변수
*/