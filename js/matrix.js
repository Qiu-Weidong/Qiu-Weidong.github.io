(function () {
    const container = document.getElementById('page-header');

    const canvas = document.createElement("canvas"), context = canvas.getContext("2d");
    // document.body.appendChild(canvas);
    // canvas.style.cssText = "position: fixed; top: 0; left: 0; background-color: #111; z-index: -1;";
    canvas.style.cssText = "width:100%; height:100%";
    container.appendChild(canvas);
    // 设置字体大小和字体样式
    const fontSize = 20;
    const fontName = 'JiaGu';

    var img = document.createElement("img");
    img.src = 'https://cdn.jsdelivr.net/gh/Qiu-Weidong/picgo/img/hacker.PNG';

    canvas.width = container.scrollWidth, canvas.height = container.scrollHeight;
    let W = canvas.width, H = canvas.height;

    // let W = window.innerWidth, H = window.innerHeight;
    // canvas.width = W; canvas.height = H;

    // img.onload = function() {
    //     context.drawImage(this, 0, 0, W, H);
    // }
    let colunms = Math.floor(W / fontSize), drops = [], str = "一丁七万三上下不丑" +
        "且丘丙中丮丰丹乂乃之乎乘乙九乳事二于云五井亘亞亡亥亦京亯人今介从令以任企伊伏伐休何" +
        "余來俘保偁允元兄先光克兔入八公六兮共其典兹册冎冓冡冬凡出刀分刖刜初利力劦勹匕化北十千" +
        "午南卜卯印即去叀又及取受叜口召可史右各合吉名向君启吹告周咸品員唐唯商啚喜喦單嗇嘉四因囿" +
        "圉土在埶執壬壺复夕夙多大天夫夷夾奚奠女好如妣妥妹妻妾姬娥子季孫學宀宁它宅安宗官宜宣室宫" +
        "宰家寅寍寢寧寮寶射專尊對小少尸尹屰山川州工巫己巳帚帝年并幽庚廩弓弗彔彘彝彭往征得御微心恆" +
        "恒戈戉戊戍成我戒户才承折掫攴攸改敎敦文斗斝新方斿旁旅旋族旡既日旦旨旬昃明昏易昔昜星暮曾月" +
        "有朋服朕朢木未朿東析枚柳桑楚樂止正步武歲歷歸死母每毓比气水永沈河泉洹涂涉涎滳漁濘火灾炎焚" +
        "熊熹燮爲爵父爻爿牛牝牡牢牧犬狽獸率玉王珏甗甘生用甫田甲申男畏畐畯異疑癸登白百皿盂益盡監目" +
        "相眉眔眾矢示祀祖祝祭禾秉秋秜穆立竝競竹箙簋米絲网羊羌美羞義羴翌習老耑耤耳聞聽聿肉肘育膏臣臧" +
        "自臬臭至臽舂舊舌舞般良芻若 莽萅萑萬蒿虎虹血行衛衣裘見角言訊谷豆豐豕豚象豹貝貞買賓赤身車辛辟" +
        "迺追逐通遣邑郭鄉酉酒醜采重鑄鑊長門阜降陟陸隹隻雀集雇雉雍雞雨雩雪靃非韋食飲首馬駁騽驪高鬥鬯" +
        "鬼魚魯鳥鳳鳴鹿麇麋麓麥黍鼎鼓齊齒龍龐龜龠龢";

    for (let i = 0; i < colunms; i++) {
        drops.push(Math.ceil(canvas.height / fontSize) + 1)
    }

    context.font = `700 ${fontSize}px ${fontName}`;
    setInterval((function () {

        context.globalAlpha = 0.13;
        context.drawImage(img, 0, 0, W, H);

        context.globalAlpha = 1;

        context.fillStyle = "#00cc33";
        for (let i = 0; i < colunms; i++) {
            const index = Math.floor(Math.random() * str.length), x = i * fontSize, y = drops[i] * fontSize;
            context.fillText(str[index], x, y);
            if (y >= canvas.height && Math.random() > .99) { drops[i] = 0 } drops[i]++
        }
    }), 120);
    window.addEventListener("resize", (function () {
        // W = window.innerWidth;
        // H = window.innerHeight;
        W = container.scrollWidth;
        H = container.scrollHeight;
        canvas.width = W;
        canvas.height = H;
        colunms = Math.floor(W / fontSize);
        drops = [];
        for (let i = 0; i < colunms; i++) {
            drops.push(Math.ceil(canvas.height / fontSize) + 1)
        }
    }))
})();