{
    //クイズ
    const question = '新潟県長岡市内のラーメン屋で生姜を使ったスープが特徴的なラーメン屋の名前は？';
    const answer = [
        '青島食堂',
        'らーめん潤',
        'ラーメンしみず',
        'らーめん飛雄馬',
    ];
    const correct = '逆寝取りシチュ';
    
    
    const $questionArea = document.getElementById('js-question');
    const $button = document.getElementsByClassName('btn')
    
    //関数群
    const setupQuiz = ()=>{
        $questionArea.textContent = question
        for(let i=0;i<$button.length;i++){
            $button[i].textContent = answer[i]
        };
    };

    const isCorrect = (answer)=>{
        return answer===correct?true:false;
    };
    const displayAnswer = (bool)=>{
        if(bool){
            window.alert("正解")
        }else{
            window.alert("不正解")
        };
    };


    //メインの処理
    setupQuiz();
    for(let b of $button){
        b.addEventListener(
            'click',()=>{displayAnswer(isCorrect(b.textContent))}
        );
    }
    



}